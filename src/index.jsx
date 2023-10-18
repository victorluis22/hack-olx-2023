import React, { useState, useRef } from "react";
import Media from "react-media";
import FileSaver from "file-saver";
import axios from "axios";

const constraints = {
  video: {
    facingMode: "user",
  },
};

const VideoRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const videoRef = useRef(null);
  const [file, setFile] = useState(null);

  const captureVideo = async () => {
    setIsRecording(true);
    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    videoRef.current.srcObject = mediaStream;
    videoRef.current.play();
  }

  const pauseRecording = () => {
    setIsRecording(false);
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });

    videoRef.srcObject = null;
  };

  const saveVideo = () => {
    if (!isRecording) {
      return;
    }

    const blob = new Blob([videoRef.current.srcObject], {
      type: "video/mp4",
    });

    setFile(blob);
  };

  const sendVideo = async () => {
    if (!file) {
      return;
    }

    const config = {
      headers: {
        "Content-Type": "video/mp4",
      },
    };

    await axios.post("https://seu-back-end.com/api/videos", file, config);

    // Limpe o estado
    setFile(null);
  };

  return (
    <div>
      {isRecording ? (
        <video
          ref={videoRef}
          width="320"
          height="240"
          controls
          autoPlay
          
        />
      ) : (
        <button onClick={captureVideo}>Gravar</button>
      )}
      <button onClick={pauseRecording}>Pausar</button>
      <button onClick={saveVideo}>Salvar</button>
      <button onClick={sendVideo}>Enviar</button>
    </div>
  );
};

export default VideoRecorder;
