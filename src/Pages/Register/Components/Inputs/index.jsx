import React from "react";
import * as s from "./styles.js"



const Input = ({title, hasTextArea, valueInput}) => {
    return(
        <s.Container>
            <s.Title>{title}</s.Title>
            

            {hasTextArea ?
                <s.TextArea />
                :
                <s.Input value={valueInput}/>
            }
        </s.Container>
    )
}

export default Input;