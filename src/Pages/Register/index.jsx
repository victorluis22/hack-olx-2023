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
import { useNavigate } from "react-router-dom";
import { registerData } from "../../Services/registerData";
import { instantWarn } from "../../Configs/toastConfig";

import {toast} from "react-toastify"


const Register = () => {
    
    const [content, setContent] = useState({
      Titulo: "",
      Descricao: "",
      Marca: "",
      Modelo: "",
      Condicao: "",
      Memoria: "",
      Cor: "",
      Bateria: "",
      Preco: "",
      Localizacao: "",
      Contato: ""
    });

    const navigate = useNavigate()
    

    const handleSubmit = () => {
      const { Marca, Modelo, Condicao, Memoria, Bateria, Preco } = content

      if (Marca && Modelo && Condicao && Memoria && Bateria && Preco){
        navigate("/verification", {state: {content: content}})
        window.scrollTo(0, 0)
      }
      else{
        alert("Preencha todos os campos obrigatórios!")
      }
      
    };


    const handleChangeTitle = (e) => {
      setContent({
        ...content,
        Titulo: e.target.value,
      });
    };
    const handleChangeDesc = (e) => {
    setContent({
      ...content,
      Descricao: e.target.value,
    });
    };
    const handleChangeMark = (e) => {
    setContent({
      ...content,
      Marca: e.target.value,
    });
    };
    const handleChangeModel = (e) => {
    setContent({
      ...content,
      Modelo: e.target.value,
    });
    };
    const handleChangeCondition = (e) => {
    setContent({
      ...content,
      Condicao: e.target.value,
    });
    };
    const handleChangeCapacity = (e) => {
    setContent({
      ...content,
      Memoria: e.target.value,
    });
    };
    const handleChangeColor = (e) => {
    setContent({
      ...content,
      Cor: e.target.value,
    });
    };
    const handleChangeBatery = (e) => {
    setContent({
      ...content,
      Bateria: e.target.value,
    });
    };
    const handleChangePrice = (e) => {
    setContent({
      ...content,
      Preco: e.target.value,
    });
    };
    const handleChangeLocation = (e) => {
    setContent({
      ...content,
      Localizacao: e.target.value,
    });
    };
    const handleChangeContact = (e) => {
    setContent({
      ...content,
      Contato: e.target.value,
    });
    };

    return(
      <s.Container>
        <s.Title>O que você está anunciando?</s.Title>
        <s.Card>
          
          <s.SubtitleArea>
            <AiOutlineArrowLeft size={18} color="purple"/>
            <s.Subtitle>Celulares e Telefonia</s.Subtitle>
          </s.SubtitleArea>

          <Input title={"Título*"} valueInput={content.Titulo} onChangeFunction={handleChangeTitle}/>
          <Input title={"Descrição*"} hasTextArea={true} valueInput={content.Descricao} onChangeFunction={handleChangeDesc} placeholder={"Descreva aqui seu aparelho"}/>
          <SelectInput label={"Marca"} options={registerData.brand} valueInput={content.Marca} onChangeFunction={handleChangeMark}/>
          <SelectInput label={"Modelo"} options={registerData.model} valueInput={content.Modelo} onChangeFunction={handleChangeModel}/>
          <SelectInput label={"Condição"} options={registerData.condition} valueInput={content.Condicao} onChangeFunction={handleChangeCondition}/>
          <SelectInput label={"Memória Interna"} options={registerData.memory} valueInput={content.Memoria} onChangeFunction={handleChangeCapacity}/>
          <SelectInput label={"Cor"} options={registerData.color} valueInput={content.Cor} onChangeFunction={handleChangeColor} />
          <SelectInput label={"Saúde da bateria"} options={registerData.batery} valueInput={content.Bateria} onChangeFunction={handleChangeBatery}/>
          <Input title={"Preço (R$)"} valueInput={content.Preco} onChangeFunction={handleChangePrice}/>

          <FotoSubmit />
          <Input title={"Localização*"} valueInput={content.Localizacao} onChangeFunction={handleChangeLocation}/>
          <Input title={"Contato*"} valueInput={content.Contato} onChangeFunction={handleChangeContact}/>
          <BottomContent title={""} content={"Olaria, Nova Friburgo - RJ"} photo={LocationPin}/>

          <BottomContent title={"Contato"} content={"(21)99999-9999"} photo={TelefoneIcon}/>
          <BottomContent title={""} content={"Não pedimos códigos por ligação, chat ou WhatsApp. Desconfie se alguém entrar em contato ou enviar comprovante de pagamento em nome da OLX."} photo={AlertIcon}/>

          <CheckboxOption title={"Ocultar meu telefone neste anúncio"}/>
          
          <BottomContent title={"Verificação de Segurança*"} content={"Por favor, digite o texto mostrado na imagem abaixo para concluir o envio do seu anúncio."} photo={null} bottomImage={VerificationCode}/>

          <s.Button onClick={handleSubmit}>Enviar</s.Button>
        </s.Card>
      </s.Container>  
    )
}

export default Register