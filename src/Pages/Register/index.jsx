import React from "react";
import * as s from "./styles";
import  { AiOutlineArrowLeft } from "react-icons/ai"
// import { GoLocation } from "react-icons/md"

import LocationPin from "../../Assets/GlobalImages/locationPin.svg"
import TelefoneIcon from "../../Assets/GlobalImages/telephoneIcon.svg"
import AlertIcon from "../../Assets/GlobalImages/exclamationIcon.svg"

import SelectInput from "./Components/SelectInput";
import Input from "./Components/Inputs";
import FotoSubmit from "./Components/FotoSubmit"
import BottomContent from "./Components/BottomContent";
import CheckboxOption from "./Components/CheckboxOption";
import VerificationCode from "../../Assets/GlobalImages/verificationCode.png"

import { useState } from "react";


const Register = () => {
    
    const [cep, setCep] = useState("00000-000")
    
    return(
      <s.Container>
        <s.Title>O que você está anunciando?</s.Title>
        <s.Card>
          
          <s.SubtitleArea>
            <AiOutlineArrowLeft />
            <s.Subtitle>Celulares e Telefonia</s.Subtitle>
          </s.SubtitleArea>

          <Input title={"Título*"}/>
          <Input title={"Descrição*"} hasTextArea={true}/>
          <SelectInput label={"Marca*"} options={["Apple"]}/>
          <SelectInput label={"Modelo*"} options={["Iphone 14 PRO MAX"]}/>
          <SelectInput label={"Condição"} options={["Usado"]}/>
          <SelectInput label={"Memória Interna"} options={["256GB"]}/>
          <SelectInput label={"Cor"} options={["Roxo"]}/>
          <SelectInput label={"Saúde da bateria"} options={["90%"]}/>
          <Input title={"Preço (R$)"}/>
          <Input title={"Contato"}/>

          <FotoSubmit />
          <Input title={"Localização*"} valueInput={cep}/>
          <BottomContent title={""} content={"Olaria, Nova Friburgo - RJ"} photo={LocationPin}/>
          {/* <GoLocation /> */}
          {/* Pra quem ver esse comentário, não consegui usar o ícone de pin de localização nem pelo decreto. Se quiserem tentar... */}

          <BottomContent title={"Contato"} content={"(21)99999-9999"} photo={TelefoneIcon}/>
          <BottomContent title={""} content={"Não pedimos códigos por ligação, chat ou WhatsApp. Desconfie se alguém entrar em contato ou enviar comprovante de pagamento em nome da OLX."} photo={AlertIcon}/>

          <CheckboxOption title={"Ocultar meu telefone neste anúncio"}/>
          
          <BottomContent title={"Verificação de Segurança*"} content={"Por favor, digite o texto mostrado na imagem abaixo para concluir o envio do seu anúncio."} photo={null} bottomImage={VerificationCode}/>

          <a href="/announce">Clique aqui para ir para a próxima página</a>
        </s.Card>
      </s.Container>  
    )
}

export default Register

