import React from "react";
import * as s from "./styles"
import ImageInfo from "./Components/ImageInfo";

import image1 from "../../Assets/Result/image1.svg"
import image2 from "../../Assets/Result/image2.svg"
import image3 from "../../Assets/Result/image3.svg"
import image4 from "../../Assets/Result/image4.svg"
import image5 from "../../Assets/Result/image5.svg"
import image6 from "../../Assets/Result/image6.svg"
import image7 from "../../Assets/Result/image7.svg"
import image8 from "../../Assets/Result/image8.svg"
import image9 from "../../Assets/Result/image9.svg"
import IASucess from "./Components/IASucess";
import { useNavigate, useParams } from "react-router-dom";
import IAFalse from "./Components/IAFalse";

const Result = ({ location }) => {
    const { result } = useParams()
    const navigate = useNavigate()

    return(
        <s.Container>
            {result === "true" ?
                <IASucess />
                :
                <IAFalse />
            }
            <s.SideContainer>
                <s.Button onClick={() => navigate("/announce")}>Voltar a pagina inicial</s.Button>
            </s.SideContainer>
        </s.Container>
    )
}

export default Result;