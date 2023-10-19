import React from "react";
import * as s from "./styles";


const NameInput = ({ title, valueInput, onChangeFunction}) => {
    return(
      <s.Container>
        <s.Title>{title}</s.Title>

        <s.Input onChange={(e) => onChangeFunction(e)} value={valueInput}/>
      </s.Container>  
    )
}

export default NameInput