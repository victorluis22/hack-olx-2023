import React, { useContext, useState } from "react";
import * as s from "./styles";
import Logo from "../../Assets/GlobalImages/LogoOlx.svg"
import Victao from "../../Assets/GlobalImages/victao.jpg"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/User";
import { accounts } from "../../Services/accounts";

const Header = () => {
    const navigate = useNavigate()
    const { user, changeUser } = useContext(UserContext)
    const [menu, setMenuVisible] = useState(false)

    return(
      <s.Container>
        <s.Image src={Logo} onClick={() => navigate("/")}/>
        <s.UserBadge onClick={() => setMenuVisible(!menu)}>
            <s.Avatar src={Victao}/>
            <s.Name>{user.Nome}</s.Name>
        </s.UserBadge>

        {menu ?
          <s.Menu>
            {accounts.map((eachAccount) => {
              const { Nome, TempoConta, Vendas } = eachAccount
              return <s.MenuOptions onClick={() => {
                changeUser(Nome, TempoConta, Vendas)
                setMenuVisible(!menu)
              }}>{eachAccount.Nome}</s.MenuOptions>
            })}
          </s.Menu>
          :
          null
        }

      </s.Container>  
    )
}

export default Header
