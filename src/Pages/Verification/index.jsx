import React, { useEffect, useState } from "react";
import * as s from "./styles";

import loading from '../../Assets/VerificationImage/loading.gif'
import { useNavigate, useLocation } from "react-router-dom";
import { getConfirmation } from "../../Services/api";

const Verification = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { content, user } = location.state

    const requestConfirmation = async () => {
      if(!user){
        return navigate("/verification/final/false", {state: {golpe: 1, content: content, user}})
      }
      try{
        const response = await getConfirmation(content)
        const golpe = response.data.golpe
        console.log(golpe)

        if (golpe > 0.7){
          navigate("/verification/final/false", {state: {golpe: golpe, content: content, user}})
        }
        else{
          navigate("/verification/final/true", {state: {golpe: golpe, content: content, user}})
        }
      }
      catch(e){
        alert("Erro ao acessar API OLX Smart")
      }
    }

    useEffect(() => {
      requestConfirmation()
    }, [])

    return(
      <s.Container>
        <s.Card>

          <s.Image src={loading} alt="Carregando verificação..." />
          <s.Title>Aguarde enquanto nossa IA verifica o seu anúnicio...</s.Title>

        </s.Card>
      </s.Container>  
    )
}

export default Verification