import React from "react";
import * as s from "./styles"

const BottomContent = ({title, photo, content, bottomImage}) => {
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
            {
                bottomImage != null ?
                <>
                <s.PhotoArea>
                    <s.SecondaryPhoto src={bottomImage}/>
                </s.PhotoArea>
                <s.Input />
                <s.Subtitle>As informações com * são obrigatórias.</s.Subtitle>

                </>
                :
                <></>
            }
        </s.Container>
    )
}

export default BottomContent;