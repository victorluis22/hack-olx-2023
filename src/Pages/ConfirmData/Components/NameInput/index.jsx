import React from "react";
import * as s from "./styles";


const CPFInput = ({ title, valueInput, onChangeFunction, placeholder}) => {
    return(
      <s.Container>
        <s.Title>{title}</s.Title>

        <s.Input onChange={(e) => onChangeFunction(e)} value={valueInput} placeholder={placeholder}/>
      </s.Container>  
    )
}

export default CPFInput