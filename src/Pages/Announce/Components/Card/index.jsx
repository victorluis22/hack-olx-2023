import React from "react";
import SmartLogo from "../../../../Assets/Announce/SmartLogo.svg"
import * as product from "./styles";

import { useNavigate } from "react-router-dom";

const Card = ({title, image, price, isSmart}) => {
    
  const navigate = useNavigate()

    return(
      <product.Container>
        <product.Image src={image}/>
        <product.Title>{title}</product.Title>
        <product.Value>R${price}</product.Value>
        {
          isSmart ?
          <product.SmartContainer>
            <product.SmartTitle>Produto</product.SmartTitle>
            <product.SmartLogo src={SmartLogo}/>
          </product.SmartContainer>
          :
          <>
          </>
        }
      </product.Container>
)
}

export default Card