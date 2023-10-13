import React from "react";
import * as s from "./styles"

const BottomContent = ({title, photo, content}) => {
    return(
        <s.Container>
            <s.Title>{title}</s.Title>
            {photo != null ?

            <s.PhotoArea>
                <s.Photo src={photo}/>
                <s.Subtitle>{content}</s.Subtitle>
            </s.PhotoArea>
            
            :
            
            <s.PhotoArea>
                <s.Subtitle>{content}</s.Subtitle>
            </s.PhotoArea>
            
            }
        </s.Container>
    )
}

export default BottomContent;