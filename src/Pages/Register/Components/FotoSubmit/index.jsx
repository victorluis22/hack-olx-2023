import React, { useState } from "react";
import * as s from "./styles"

const FotoSubmit = ({onUpload}) => {
    
    
    const [file, setFile] = useState(null);
    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleUpload = () => {
        if(!file){
            return;
        }

    onUpload(file);
    }

    return(
        <s.Container>
            <s.Title>Fotos</s.Title>
            <s.Subtitle>Envie até 6 fotos</s.Subtitle>
            <s.Input type="file" onChange={handleChange} />            
            <s.PhotoArea>
                {file && <s.Photo src={URL.createObjectURL(file)}/>}
            </s.PhotoArea>
            <s.Button onClick={handleUpload}>Fazer Upload</s.Button>
        </s.Container>
    )
}

export default FotoSubmit