import React from "react";

import * as card from "./styles";

import { useNavigate } from "react-router-dom";

// import iphones from "../../../../Assets/Announce/Iphone.svg"

const CardIndex = () => {
    
  const navigate = useNavigate()

    return(
      <card.Container>
        <card.Title>Também pode te interessar</card.Title>

        <card.ImageIphone src={iphones} alt="Foto de um ai fome"/>
      </card.Container>  
)
}

export default CardIndex
