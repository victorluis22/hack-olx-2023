import React, { useEffect, useState } from "react";
import * as s from "./styles";

import { useNavigate } from "react-router-dom";


import Iphone from "../../Assets/Announce/Iphone.svg"
import Iphonemesafrente from "../../Assets/Announce/Iphonemesafrente.jpg"
import Iphonetelabaixo1 from "../../Assets/Announce/Iphonetelabaixo1.jpg"
import Iphonetelabaixo2 from "../../Assets/Announce/Iphonetelabaixo2.jpg"
import Saudebateria from "../../Assets/Announce/Saudebateria.jpg"
import Button from "./Components/Button";

import CardsSmarts from "./Components/CardsSmarts";

import RightCards from "./Components/RightCard";

const Announce = () => {
    const navigate = useNavigate()

    return(
      <s.Container>
        <s.firstpart>
          <s.MainContainer>
            <s.Title>iPhone 13 Pro</s.Title>
            <s.SubTitle>Publicado em 14/10 às 16:32 - cód. 1235163848</s.SubTitle>
            <s.ImageContainer>
              <s.Image src={Iphone} alt="Foto de um ai fome"/>
              <s.SubImageContainer>
                <s.Imageaux src={Iphone} alt="Foto de um ai fome"/>
                <s.Imageaux src={Iphonemesafrente} alt="Foto de um ai fome"/>
                <s.Imageaux src={Iphonetelabaixo1} alt="Foto de um ai fome"/>
                <s.Imageaux src={Iphonetelabaixo2} alt="Foto de um ai fome"/>
                <s.Imageaux src={Saudebateria} alt="Foto de um ai fome"/>
              </s.SubImageContainer>
            </s.ImageContainer>
            <s.Price>R$ 4.300,00</s.Price>
            <s.Description>Armazenamento de 256GB, cor Azul Sierra, saúde da bateria 86%, não possui detalhes, foi comprado no inicio de 2022 e funciona perfeitamente.</s.Description>

            <s.ButtonGroup>
              <Button type={"fav"} text={"Favoritar"} />
              <Button type={"share"} text={"Compartilhar"} />
              <Button type={"flag"} text={"Denunciar"} />
            </s.ButtonGroup>
          </s.MainContainer>

          <s.SideContainer>
            <RightCards/>
          </s.SideContainer>
          </s.firstpart>

          <CardsSmarts />
      </s.Container>  
    )
}

export default Announce