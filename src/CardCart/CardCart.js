import React from "react";
import { GlobalStyle, Imag, Button } from "./styled";

export function CardCart ({removeProduct, id, nome, imag, valor, cart}){

  const item = cart.find((item)=> item.id === id)
  
  return(
  <GlobalStyle>
    <Imag src={imag}/>
    <p>{item.qtd}x {nome}</p>
    <p>R$ {valor}</p>
    <Button onClick={()=> removeProduct(id, valor)}>x</Button>
  </GlobalStyle>
  )
}