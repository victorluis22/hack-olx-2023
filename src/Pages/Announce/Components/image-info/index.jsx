import React from "react";
import * as s from "./styles"

const ImageInfo = ({image, title, key}) => {
    return(
        <s.Container>
            {key == "information" ?
            <>
                <s.Image src={image}/>
                <s.Subtitle>{title}</s.Subtitle>
            </>
            :
            <>
                <s.MinorImage src={image}/>
                <s.Subtitle>{title}</s.Subtitle>
            </>}
        </s.Container>
    )
}

export default ImageInfo