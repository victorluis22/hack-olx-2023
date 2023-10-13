import React from "react";
import * as s from "./styles";
import SelectInput from "./Components/SelectInput";
import  { AiOutlineArrowLeft } from "react-icons/ai"
import Input from "./Components/Inputs";

const Register = () => {
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
          <Input title={"Localização"}/>
          <Input title={"Contato"}/>
        </s.Card>
      </s.Container>  
    )
}

export default Register

