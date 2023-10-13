import React from "react";
import * as s from "./styles";

const SelectInput = ({label, options}) => {
    return(
      <s.Container>
        <s.Label>{label}</s.Label>

        <s.Input>
          {options.map((eachOption) => {
            return <option value={eachOption}>{eachOption}</option>
          })}
        </s.Input>
        
      </s.Container>  
    )
}

export default SelectInput

