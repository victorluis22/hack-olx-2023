import React from "react";
import * as s from "./styles"

const ImageInfo = ({image, title, key}) => {
    return(
        <s.Container>
            <s.Image src={image}/>
            <s.Subtitle>{title}</s.Subtitle>
        </s.Container>
    )
}

export default ImageInfo