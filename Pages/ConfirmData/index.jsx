import React, { useEffect, useState } from "react";
import * as s from "./styles";

import loading from '../../Assets/VerificationImage/loading.gif'
import { useNavigate, useLocation } from "react-router-dom";

import FacialArea from "../../Assets/VerificationImage/FacialArea.svg"

import NameInput from "./Components/NameInput";
import CPFInput from "./Components/NameInput";
import DateInput from './Components/DateInput';

const ConfirmData = () => {
  
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [CPF, setCPF] = useState("")
    const [date, setDate] = useState("")
    const location = useLocation();
    const { content } = location.state


    const switchPage = () => {
      navigate("/verification/final", {state: {content: content}})
      window.scrollTo(0, 0)
    }
    
    return(
      <s.Container>
        <s.Card>
          <s.Title>Para a sua segurança, complete o seu cadastro</s.Title>
          <NameInput title={"Nome Completo *"} value={name} onChangeFuntion={setName} placeholder={"Nome completo igual ao seu RG"}/> 

          <s.InputGroup>
            <CPFInput title={"CPF *"} value={CPF} onChangeFuntion={setCPF} placeholder={"000.000.000-00"}/>
            <DateInput title={"Data de nascimento *"} value={date} onChangeFuntion={setDate} placeholder={"DD-MM-AAAA"}/>
          </s.InputGroup>     

        </s.Card>
        <s.Card>
          <s.FacialArea>
            <s.FacialAreaImage src={FacialArea}/>
            <s.Title>Centralize seu rosto dentro da área demarcada</s.Title>            
          </s.FacialArea>
        </s.Card>
        <s.Button onClick={switchPage}>Efetuar verificação</s.Button>
      </s.Container>  
    )
}

export default ConfirmData