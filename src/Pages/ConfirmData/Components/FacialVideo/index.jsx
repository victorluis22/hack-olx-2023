import React, { useState, useEffect, useRef } from "react";
import * as s from "./styles";
import * as faceapi from 'face-api.js'

import { initRecognition } from "../../../../Services/facialRecognition";

const FacialVideo = () => {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const videoHeight = 480;
  const videoWidth = 640;
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [captureVideo, setCaptureVideo] = useState(false);

  const loadModels = async () => {
    const MODEL_URL = '/Models';
    Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL)
    ]).then(setModelsLoaded(true));
  }

  const startVideo = () => {
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

  async function getLabeledFacedDescriptions(){
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

  const handleVideoOnPlay = async () => {
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
      }
    }, 100)
  }

  const closeWebcam = () => {
    videoRef.current.pause();
    videoRef.current.srcObject.getTracks()[0].stop();
    setCaptureVideo(false);
  }

  useEffect(()=> {
    loadModels();
  },[])

  
    return(
      <s.Container>
        <div style={{ textAlign: 'center', padding: '10px' }}>
          {
            captureVideo && modelsLoaded ?
              <button onClick={closeWebcam} style={{ cursor: 'pointer', backgroundColor: 'green', color: 'white', padding: '15px', fontSize: '25px', border: 'none', borderRadius: '10px' }}>
                Close Webcam
              </button>
              :
              <button onClick={startVideo} style={{ cursor: 'pointer', backgroundColor: 'green', color: 'white', padding: '15px', fontSize: '25px', border: 'none', borderRadius: '10px' }}>
                Open Webcam
              </button>
          }
        </div>
        {
        captureVideo ?
          modelsLoaded ?
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <video ref={videoRef} height={videoHeight} width={videoWidth} onPlay={handleVideoOnPlay} style={{ borderRadius: '10px' }} />
                <canvas ref={canvasRef} style={{ position: 'absolute' }} />
              </div>
            </div>
            :
            <div>loading...</div>
          :
          <>
          </>
      }
      </s.Container>  
    )
}

export default FacialVideo