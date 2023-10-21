const video = document.getElementById("video")

Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/models")
]).then(startWebcam).then(faceRecognition)

function startWebcam(){
    navigator.mediaDevices.getUserMedia({
        "video": true,
        audio: false
    }).then((stream) => {
        video.srcObject = stream
    }).catch((error) => {
        console.log(error)
    })
}

async function getLabeledFacedDescriptions(){
    const labels = ["Fellipe","Picanha","Victor","Caio"]

    return Promise.all(
        labels.map(async (label) => {
            const descriptions = []
    
            for (i = 1; i <= 3; i++){
                const image = await faceapi.fetchImage(`./labels/${label}/${i}.jpg`)
    
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

async function faceRecognition() {
    const labeledFaceDescriptors = await getLabeledFacedDescriptions()

    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors)

    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    
    const displaySize = { width: video.width, height: video.height }

    faceapi.matchDimensions(canvas, displaySize)

    setInterval(async () => {
        const detections = await faceapi
            .detectAllFaces(video)
            .withFaceLandmarks()
            .withFaceDescriptors()

        const resizedDetections = faceapi.resizeResults(detections, displaySize)

        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

        const results = resizedDetections.map((d) => {
            return faceMatcher.findBestMatch(d.descriptor)
        })

        results.forEach((result, i) => {
            const box = resizedDetections[i].detection.box
            const drawBox = new faceapi.draw.DrawBox(box, { label: result })
            drawBox.draw(canvas)
        })
    }, 100)
}