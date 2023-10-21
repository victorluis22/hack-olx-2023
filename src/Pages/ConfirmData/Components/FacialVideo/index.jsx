import React, { useState, useEffect, useRef } from "react";
import * as s from "./styles";

import { loadModels, startVideo, handleVideoOnPlay, closeWebcam } from "../../../../Services/facialRecognition";
import loadingGif from "../../../../Assets/VerificationImage/loading.gif"

const FacialVideo = ({ setPerson }) => {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const videoHeight = 260;
  const videoWidth = 480;
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [captureVideo, setCaptureVideo] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    loadModels(setModelsLoaded);
  },[])

  
    return(
      <s.Container>
        <div style={{ textAlign: 'center', padding: '10px' }}>
          {
            captureVideo && modelsLoaded ?
              <button onClick={() => closeWebcam(videoRef, setCaptureVideo)} style={{ cursor: 'pointer', backgroundColor: 'green', color: 'white', padding: '15px', fontSize: '25px', border: 'none', borderRadius: '10px' }}>
                Close Webcam
              </button>
              :
              <s.Button onClick={() => startVideo(setLoading, setCaptureVideo, videoRef)}>Efetuar verificação</s.Button>
          }
        </div>
        {
        captureVideo ?
          modelsLoaded ?
            <s.VideoContainer>
              <s.Subtitle style={{display: loading ? "none": "initial"}}>Centralize seu rosto e espere 2 segundos</s.Subtitle>   
              <s.Video style={{display: loading ? "none": "initial"}} ref={videoRef} height={videoHeight} width={videoWidth} onPlay={() => handleVideoOnPlay(canvasRef, videoRef, videoWidth, videoHeight, setLoading, setPerson, setCaptureVideo)}/>
              <s.Canvas style={{display: loading ? "none": "initial"}} ref={canvasRef} />

              {loading ?
                <s.LoadingContainer>
                  <s.Image src={loadingGif} alt="Carregando verificação..." />
                  <s.Subtitle>Aguarde enquanto configuramos o reconhecimento facial...</s.Subtitle>
                </s.LoadingContainer>
              :
                null
              }
            </s.VideoContainer>
            :
            <s.LoadingContainer>
              <s.Image src={loadingGif} alt="Carregando verificação..." />
              <s.Subtitle>Aguarde enquanto configuramos o reconhecimento facial...</s.Subtitle>
            </s.LoadingContainer>
          :
          null
      }
      </s.Container>  
    )
}

export default FacialVideo