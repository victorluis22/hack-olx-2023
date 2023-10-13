import React from "react";
import * as s from "./styles"

const CheckboxOption = ({title}) => {
    return(
        <s.Container>
            <s.PhotoArea>
                <s.Input type="checkbox"/>
                <s.Title>{title}</s.Title>
            </s.PhotoArea>
        </s.Container>
    )
}

export default CheckboxOption;