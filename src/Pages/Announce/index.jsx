import React from "react";
import * as s from "./styles"
import ImageInfo from "./Components/image-info";

import image1 from "../../Assets/Announce/image1.svg"
import image2 from "../../Assets/Announce/image2.svg"
import image3 from "../../Assets/Announce/image3.svg"
import image4 from "../../Assets/Announce/image4.svg"
import image5 from "../../Assets/Announce/image5.svg"
import image6 from "../../Assets/Announce/image6.svg"
import image7 from "../../Assets/Announce/image7.svg"
import image8 from "../../Assets/Announce/image8.svg"
import image9 from "../../Assets/Announce/image9.svg"

const AnnouncePage = () => {
    return(
        <s.Container>
            <s.Title>Anuncie com garantia da OLX, pagamento e entrega fácil para todo o Brasil.</s.Title>

            <s.ItemContainer>
                <ImageInfo image={image1} title = {"Seu anúncio é mais visto! Retornando mais chances de vender."}/>
                <ImageInfo image={image2} title = {"Entrega fácil, venda para todo o Brasil sem custo de entrega para você."}/>
                <ImageInfo image={image3} title = {"Garantia da OLX, você só envia o produto após confirmamos que o pagamento está com a gente."}/>
                <ImageInfo image={image4} title = {"Seu comprador parcela sem juros e você recebe à vista."}/>
            </s.ItemContainer>

            <s.Subtitle>Após a venda você vai receber R$ 5.220,00 .</s.Subtitle>

            <s.UserBadge>
                <ImageInfo image={image5} title={"Fique Atento"}/>
                <s.ItemContainer2>
                    <ImageInfo image={image9} title = {"Dê preferência ao chat da OLX como forma de confirmação de status das suas vendas."} key={"information"}/>
                    <ImageInfo image={image8} title = {"Evite clicar em links para outros sites no chat."} key={"information"}/>
                    <ImageInfo image={image7} title = {"Desconfie de pessoas que entram em contato com você em nome da OLX solicitando informações ou pagamentos."} key={"information"}/>
                    <ImageInfo image={image6} title = {"Nunca pedimos códigos de confirmação via chat ou aplicativos de mensagens."} key={"information"}/>
                </s.ItemContainer2>


            </s.UserBadge>
            <s.Button href="/">Voltar a pagina inicial</s.Button>
        </s.Container>
    )
}

export default AnnouncePage;