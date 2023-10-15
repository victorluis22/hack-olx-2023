import React, { useEffect, useState } from "react";
import * as s from "./styles";

import loading from '../../Assets/VerificationImage/loading.gif'
import { useNavigate } from "react-router-dom";

const Verification = () => {
    const navigate = useNavigate()

    useEffect(() => {
      setTimeout(() => {
        navigate("/verification/final/true")
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