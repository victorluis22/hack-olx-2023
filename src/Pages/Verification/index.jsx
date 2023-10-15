import React, { useEffect, useState } from "react";
import * as s from "./styles";

import loading from '../../Assets/VerificationImage/loading.gif'
import { useNavigate, useLocation } from "react-router-dom";

const Verification = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { content } = location.state

    useEffect(() => {
      setTimeout(() => {
        console.log(content)
        if (content.Memoria == "64GB"){
          navigate("/verification/final/false")
        }
        else{
          navigate("/verification/final/true")
        }
        
      }, 2000)
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