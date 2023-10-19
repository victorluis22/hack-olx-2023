import React from "react";
import * as s from "./styles";

import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineShareAlt } from "react-icons/ai"
import { FiFlag } from "react-icons/fi"

const Button = ({ type, text }) => {
    const changeIcon = () => {
      switch(type){
        case "fav":
          return <AiOutlineHeart className="icon" color="orange" size={20} />
        case "share":
          return <AiOutlineShareAlt className="icon" color="orange" size={20}/>
        case "flag":
          return <FiFlag className="icon" color="orange" size={20}/>
      }
    }
    return(
      <s.Container>
        {changeIcon()}
        <s.Text>{text}</s.Text>
      </s.Container>  
    )
}

export default Button