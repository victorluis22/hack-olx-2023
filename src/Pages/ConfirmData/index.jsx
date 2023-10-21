import React, { useContext, useEffect, useState } from "react";
import * as s from "./styles";

import loading from '../../Assets/VerificationImage/loading.gif'
import { useNavigate, useLocation } from "react-router-dom";

import FacialArea from "../../Assets/VerificationImage/FacialArea.svg"

import NameInput from "./Components/NameInput";
import CPFInput from "./Components/NameInput";
import DateInput from './Components/DateInput';
import FacialVideo from "./Components/FacialVideo";
import { UserContext } from "../../Context/User";

const ConfirmData = () => {
  
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [CPF, setCPF] = useState("")
    const [date, setDate] = useState("")
    const [person, setPerson] = useState("")
    const location = useLocation();
    const { content } = location.state
    const { user } = useContext(UserContext)

    useEffect(() => {
      if (person){
        if (person === user.Nome){
          console.log(person)
          navigate("/verification/final", {state: {content: content, user: true}})
          window.scrollTo(0, 0)
        }
        else{
          navigate("/verification/final", {state: {content: content, user: false}})
          window.scrollTo(0, 0)
        }
      }
    },[person])

    
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
            <FacialVideo setPerson={setPerson}/>         
          </s.FacialArea>
        </s.Card>
      </s.Container>  
    )
}

export default ConfirmData