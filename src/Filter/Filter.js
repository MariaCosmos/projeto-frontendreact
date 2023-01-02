import React from "react";
import { GlobalStyle } from "./styled";
import { Input } from "./styled";

export default function Filter(props){
  const {inputs, onChange} = props

  return(
    <GlobalStyle >
      <h2>Filtros</h2>

      <Input>
      <label for="valorMin">Valor mínimo</label>
      <input id="valorMin" onChange={onChange} value={inputs.valorMin} type="number" name="valorMin"></input>
      </Input>

      <Input>
      <label for="valorMax">Valor máximo</label>
      <input id="valorMax" onChange={onChange} value={inputs.valorMax} type="number" name="valorMax"></input>
      </Input>

      <Input>
      <label for="nome">Busca por nome</label>
      <input id="nome" onChange={onChange} value={inputs.buscaNome} type="text" name="buscaNome"></input>
      </Input>

    </GlobalStyle>
  )
}