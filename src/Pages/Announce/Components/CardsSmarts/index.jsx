import React from "react";

import * as cs from "./styles";

import { useNavigate } from "react-router-dom";

import NewCard from "../NewCard/index"

const CardsSmarts = () => {
    const navigate = useNavigate()

    return(
      <cs.Container>
        <cs.Title>Outros produtos com selo SMART</cs.Title>

        <NewCard />

      </cs.Container>  
    )
}

export default CardsSmarts;