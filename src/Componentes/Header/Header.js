import React from "react";
import { HeaderContainer } from "./styled";

export default function Header() {
    return (
        <HeaderContainer>
        <h1>LabeTube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </HeaderContainer>
    )
    
}