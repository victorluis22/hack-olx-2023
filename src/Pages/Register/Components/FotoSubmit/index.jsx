import React, { useState } from "react";
import * as s from "./styles"
import axios from "axios";

const FotoSubmit = ({onUpload}) => {
    
    
    // const [file, setFile] = useState(null);
    // const handleChange = (event) => {
    //     setFile(event.target.files[0]);
    // };
    // const handleUpload = () => {
    //     if(!file){
    //         return;
    //     }

    // onUpload(file);
    // }

    const [files, setFiles] = useState(null);
    const [progress, setProgress] = useState({started: false, porcentage: 0});
    const [message, setMessage] = useState(null);

    function handleUpload(){
        
        if(!files){
            setMessage("Nenhum arquivo selecionado.");
            return;
        }

        const fd = new FormData();
        for (let i = 0; i<files.lenght; i++){
            fd.append(`file${}`)
        }

        setMessage("Fazendo upload...");
        setProgress(prevState => {
            return{...prevState, started: true, }
        })
        axios.post("https://httpbin.org/post", fd, {
            onUploadProgress: (progressEvent) => {setProgress(prevState => {
                return {...prevState, porcentage: progressEvent.progress*100}
            })},
            headers: {
                "Custom-Header": "value",

            }
        })
        .then(res => {
            setMessage("Upload feito com sucesso!")
            console.log(res.data);
        })
        .catch(err =>  {
            setMessage("Upload não efetuado.")
            console.error(err)
        });
    }

    return(
        <s.Container>
            <s.Title>Fotos</s.Title>
            <s.Subtitle>Envie até 6 fotos</s.Subtitle>
            <s.Input type="file" onChange={(e) => {setFile(e.target.files)}} multiple />            
            <s.PhotoArea>
                {/* {file && <s.Photo src={URL.createObjectURL(file)}/>} */}
                {
                    progress.started && <progress max="100" value={progress.porcentage}></progress>
                }
                {
                    message && <span>{message}</span>
                }
            </s.PhotoArea>
            <s.Button onClick={handleUpload}>Fazer Upload</s.Button>
        </s.Container>
    )
}

export default FotoSubmit