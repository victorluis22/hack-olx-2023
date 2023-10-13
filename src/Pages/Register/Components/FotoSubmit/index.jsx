import React from "react";
import * as s from "./styles"
import photo1 from "../../../../Assets/GlobalImages/photo1.svg"
import photo2 from "../../../../Assets/GlobalImages/photo2.svg"

const FotoSubmit = () => {
    return(
        <s.Container>
            <s.Title>Fotos</s.Title>
            <s.Subtitle>Envie até 6 fotos</s.Subtitle>
            <s.PhotoArea>
                <s.Photo src={photo2}/>
                <s.Photo src={photo1}/>
            </s.PhotoArea>
        </s.Container>
    )
}

export default FotoSubmit