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

import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
      Contato: "",
      Golpe: ""
    });

    const navigate = useNavigate()
    

    const handleSubmit = () => {
      // axios
      // .post('http://localhost:5000/', content)
      // .then((response) => {
      //   console.log(response);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
      navigate("/verification", {state: {content: content}})
      window.scrollTo(0, 0)
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
          <SelectInput label={"Marca*"} options={["Selecione","ACESSÓRIOS E OUTROS","APPLE","SAMSUNG","XIAOMI","MOTOROLA","LENOVO","LG","ASUS","SONY","HUAWEI","INFINIX"]} valueInput={content.Marca} onChangeFunction={handleChangeMark}/>
          <SelectInput label={"Modelo*"} options={["Selecione","IPHONE 6","IPHONE 6 PLUS","IPHONE 6S","IPHONE 6S PLUS","IPHONE 7","iPHONE 7 PLUS","IPHONE 8","IPHONE 8 PLUS","IPHONE SE 2020","IPHONE X","IPHONE XR","IPHONE XS","IPHONE XS MAX","IPHONE 11","IPHONE 11 PRO","IPHONE 11 PRO MAX","IPHONE 12","IPHONE 12 MINI","IPHONE 12 PRO","IPHONE 12 PRO MAX","IPHONE 13","IPHONE 13 MINI","IPHONE 13 PRO","IPHONE 13 PRO MAX","IPHONE 14","IPHONE 14 PLUS","IPHONE 14 PRO","IPHONE 14 PRO MAX","OUTROS"]} valueInput={content.Modelo} onChangeFunction={handleChangeModel}/>
          <SelectInput label={"Condição"} options={["Selecione","Novo","Usado - Excelente","Usado - Bom","Recondicionado","Com defeito"]} valueInput={content.Condicao} onChangeFunction={handleChangeCondition}/>
          <SelectInput label={"Memória Interna"} options={["Selecione","512MB","1GB","2GB","4GB","8GB","16GB","32GB","64GB","128GB","256GB","512GB","1TB"]} valueInput={content.Memoria} onChangeFunction={handleChangeCapacity}/>
          <SelectInput label={"Cor"} options={["Selecione","Preto","Prata","Branco","Verde","Amarelo","Vermelho","Rosa","Dourado","Azul","Cinza","Laranja","Roxo","Bronze","Outra"]} valueInput={content.Cor} onChangeFunction={handleChangeColor} />
          <SelectInput label={"Saúde da bateria"} options={["Selecione","Perfeita (95% até 100%)","Boa (80% até 94%)","OK (60% até 79%)","Ruim (40% até 59%)","Muito Ruim (abaixo de 39%)"]} valueInput={content.Bateria} onChangeFunction={handleChangeBatery}/>
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