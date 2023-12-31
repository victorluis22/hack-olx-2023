import React from "react";
import * as s from "./styles";

const SelectInput = ({label, options, onChangeFunction}) => {
    return(
      <s.Container>
        <s.Label>{label}*</s.Label>

        <s.Input onChange={(e) => onChangeFunction(e)}>
          <option value="">Selecione uma opção</option>
          {options.map((eachOption, index) => {
            return <option key={index} value={eachOption}>{eachOption}</option>
          })}
        </s.Input>
        
      </s.Container>  
    )
}

export default SelectInput

