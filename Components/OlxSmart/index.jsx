import React from "react";
import * as s from "./styles"

import neuralIcon from "../../Assets/Result/neuralNet.svg"

const OlxSmart = () => {
    return(
        <s.Container>
            <s.Image src={neuralIcon} alt="Imagem de uma rede neural"/>
            <s.Title>OLX Smart</s.Title>
        </s.Container>
    )
}

export default OlxSmart;