import React from "react";
import * as s from "./styles";
import Logo from "../../Assets/GlobalImages/LogoOlx.svg"
import Victao from "../../Assets/GlobalImages/victao.jpg"

const Header = () => {
    return(
      <s.Container>
        <s.Image src={Logo}/>
        <s.UserBadge>
            <s.Avatar src={Victao}/>
            <s.Name>Victor</s.Name>
        </s.UserBadge>

      </s.Container>  
    )
}

export default Header
