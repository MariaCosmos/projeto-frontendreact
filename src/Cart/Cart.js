import React, { useState } from "react";
import { GlobalStyle } from "./styled";
import { Produto } from "./styled";
import { CardCart } from "../CardCart/CardCart";

export default function Cart(props){
  const {cart, removeProduct, valorTotal} = props 

  return(
    <GlobalStyle>
      <h2>Carrinho</h2>
      <Produto>
        {cart.map((produto)=>{
          return <CardCart cart={cart} qtd={cart.qtd} removeProduct={removeProduct} id={produto.id} nome={produto.nome} valor={produto.valor} imag={produto.imag}/>
        })}
      </Produto>
      <p>Total: R$ {valorTotal}</p>
    </GlobalStyle>
  )
}

