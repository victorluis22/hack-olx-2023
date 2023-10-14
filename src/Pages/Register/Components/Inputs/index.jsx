import React from "react";
import * as s from "./styles.js"



const Input = ({title, hasTextArea, valueInput, onChangeFunction}) => {
    return(
        <s.Container>
            <s.Title>{title}</s.Title>

            {hasTextArea ?
                <s.TextArea onChange={(e) => onChangeFunction(e)} value={valueInput}/>
                :
                <s.Input onChange={(e) => onChangeFunction(e)} value={valueInput}/>
            }
        </s.Container>
    )
}

export default Input;