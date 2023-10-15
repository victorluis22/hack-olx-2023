import React from "react";
import * as s from "./styles";


const DateInput = ({ title, valueInput, onChangeFunction, placeholder}) => {
    return(
      <s.Container>
        <s.Title>{title}</s.Title>

        <s.InputGroup>
          <s.Input type={"number"} onChange={(e) => onChangeFunction(e)} value={valueInput} placeholder={placeholder.slice(0,2)}/>
          <s.Input type={"number"} onChange={(e) => onChangeFunction(e)} value={valueInput} placeholder={placeholder.slice(3,5)}/>
          <s.Input type={"number"} onChange={(e) => onChangeFunction(e)} value={valueInput} placeholder={placeholder.slice(6,8)}/>
        </s.InputGroup>
      </s.Container>  
    )
}

export default DateInput