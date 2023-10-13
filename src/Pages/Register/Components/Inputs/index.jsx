import React from "react";
import * as s from "./styles.js"



const Input = ({title, hasTextArea}) => {
    return(
        <s.Container>
            <s.Title>{title}</s.Title>
            

            {hasTextArea ?
                <s.TextArea />
                :
                <s.Input />
            }
        </s.Container>
    )
}

export default Input;