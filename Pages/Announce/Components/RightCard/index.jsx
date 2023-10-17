// React
import React from 'react';

// Native Components
import * as r from './styles';

import reputation from "../../../../Assets/Announce/reputacao.png"

import verificadoredes from "../../../../Assets/Announce/verificadoredes.svg"
import verificadoseg from "../../../../Assets/Announce/verificadoseg.svg"

const RightCards = () => {
  return(
    <r.Container>
      <r.Price>
        <r.PriceNumber>R$ 4300</r.PriceNumber>
      </r.Price>

      <r.UserCard> 
        <r.Title>Claudio Junior</r.Title>
        
        <r.ButtonsGroup>
          <r.ButtonRequest>Solicitar</r.ButtonRequest>
          <r.ButtonChat>Chat</r.ButtonChat>
        </r.ButtonsGroup>

        <r.SubTitle>Ultimo acesso há 18 horas</r.SubTitle>

        <r.VerifyContainer>
          <r.ImageContainer>

            <r.SubTitle style={{margin: 5, fontSize: 18,color: "#1a1d23"}}>Verificado com:</r.SubTitle>
            
            <r.Image src={verificadoredes} alt="Foto de um ai fome"/>
          </r.ImageContainer>

          <r.SubTitle style={{marginBottom: 15}}>Na OLX desde agosto de 2015</r.SubTitle>
          <r.SubDescription2>Ver todos os anúncios</r.SubDescription2>
        </r.VerifyContainer>
      </r.UserCard>

      <r.ReputationImage src={reputation} alt='Ranking de Reputação'/>

      <r.SecurityCard>
        <r.Image2 src={verificadoseg} alt="Foto de um ai fome"/>
        <r.SecurityContainer>
          <r.Title style={{fontSize: 20}}>Dicas de Segurança</r.Title>
          <r.SubDescription style={{fontSize: 16}}>Não faça pagamentos antes de verificar o que...</r.SubDescription>
          <r.SubDescription2>Ver todos os anúncios.</r.SubDescription2>
        </r.SecurityContainer>
      </r.SecurityCard> 

    </r.Container>
  )
}

export default RightCards