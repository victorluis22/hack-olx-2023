import React from "react";
import * as s from "./styles"

import {AiOutlineCheckCircle} from 'react-icons/ai'
import OlxSmart from "../../../../Components/OlxSmart";

const IASucess = ({golpe, user}) => {
    return(
        <s.Container>
            <OlxSmart />
            <AiOutlineCheckCircle color="green" size={60}/>
            <s.Title>Anúncio Verificado</s.Title>
            <s.SubTitle>Probabilidade de golpe: {golpe * 100 }%</s.SubTitle>
            <s.SubTitle>Usuário verificado com sucesso</s.SubTitle>

            <s.SubTitle>
                Parabéns, seu anúnico foi analisado pela inteligência artificial do OLX e foi classificada
                como verdadeiro.
            </s.SubTitle>

            <s.List>
                <s.ListItem>Seu anúnico contará com um selo de verificação</s.ListItem>
                <s.ListItem>Sua reputação na OLX aumentou</s.ListItem>
            </s.List>
        </s.Container>
    )
}

export default IASucess;