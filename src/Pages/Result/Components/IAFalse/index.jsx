import React from "react";
import * as s from "./styles"

import { AiOutlineCloseCircle } from 'react-icons/ai'
import OlxSmart from "../../../../Components/OlxSmart";

const IAFalse = ({ golpe }) => {
    return(
        <s.Container>
            <OlxSmart />
            <AiOutlineCloseCircle color="red" size={60}/>
            <s.Title>Anúncio Verificado</s.Title>
            <s.SubTitle>Probabilidade de golpe: {golpe * 100 }%</s.SubTitle>

            <s.SubTitle>
                Nossa IA verificou uma possível ameaça de golpe.
                Infelizmente seu anúnico precisará de uma análise do time da OLX. Avisaremos
                assim que for liberado ou for excluido. Se for comprovada fraude:
            </s.SubTitle>

            <s.List>
                <s.ListItem>Seu anúncio não será publicado</s.ListItem>
                <s.ListItem>Sua reputação na OLX diminuirá</s.ListItem>
            </s.List>
        </s.Container>
    )
}

export default IAFalse;