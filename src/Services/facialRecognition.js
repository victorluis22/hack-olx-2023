import * as faceapi from 'face-api.js'

export const loadModels = async (setModelsLoaded) => {
    const MODEL_URL = '/Models';
    Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL)
    ]).then(setModelsLoaded(true));
}

export const startVideo = (setLoading, setCaptureVideo, videoRef) => {
    setLoading(true)
    setCaptureVideo(true);
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
}

export async function getLabeledFacedDescriptions(){
    const labels = ["Fellipe","Picanha","Victor","Caio"]

    return Promise.all(
        labels.map(async (label) => {
            const descriptions = []
    
            for (let i = 1; i <= 3; i++){
                const image = await faceapi.fetchImage(`./Labels/${label}/${i}.jpg`)
    
                const detections = await faceapi
                    .detectSingleFace(image)
                    .withFaceLandmarks()
                    .withFaceDescriptor()
    
                descriptions.push(detections.descriptor)
            }
            return new faceapi.LabeledFaceDescriptors(label, descriptions)
        })
    )
  }

export const handleVideoOnPlay = async (canvasRef, videoRef, videoWidth, videoHeight, setLoading, setPerson, setCaptureVideo) => {
    const labeledFaceDescriptors = await getLabeledFacedDescriptions()
    
    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors)

    canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);

    const displaySize = {
      width: videoWidth,
      height: videoHeight
    }

    faceapi.matchDimensions(canvasRef.current, displaySize);

    setInterval(async () => {
      if (canvasRef && canvasRef.current){

        const detections = await faceapi
          .detectAllFaces(videoRef.current)
          .withFaceLandmarks()
          .withFaceDescriptors()

        setLoading(false)

        
        const resizedDetections = faceapi.resizeResults(detections, displaySize)

        canvasRef && canvasRef.current && canvasRef.current.getContext('2d').clearRect(0, 0, videoWidth, videoHeight)

        const results = resizedDetections.map((d) => {
            return faceMatcher.findBestMatch(d.descriptor)
        })

        results.forEach((result, i) => {
            const box = resizedDetections[i].detection.box
            const drawBox = new faceapi.draw.DrawBox(box, { label: result })
            canvasRef && canvasRef.current && drawBox.draw(canvasRef.current)
        })

        if (results[0]._label != "unknown"){
            setTimeout(() => {
                setPerson(results[0]._label)
                closeWebcam(videoRef, setCaptureVideo)
            }, 2000)
        }
      }
    }, 100)
  }

export const closeWebcam = (videoRef, setCaptureVideo) => {
    videoRef && videoRef.current && videoRef.current.pause();
    videoRef && videoRef.current && videoRef.current.srcObject.getTracks()[0].stop();
    setCaptureVideo(false);
  }