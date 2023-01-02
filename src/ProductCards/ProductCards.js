import React from "react";
import { GlobalStyle, Imag, Text, Button } from "./styled";

export default function ProductCards(props){
  const {imag, id, nome, valor, addProduct} = props

  return(
    <GlobalStyle>
      <Imag src={imag} alt="imagem ilustrativa"/>
      <Text>{nome}</Text>
      <Text>{`R$${valor} Kg`}</Text>
      <Button onClick={()=> addProduct(id, imag, nome, valor)}>Adicionar ao carrinho</Button>
    </GlobalStyle>
  )
}