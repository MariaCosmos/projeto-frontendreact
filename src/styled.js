import React from "react";
import styled from "styled-components";


export const GlobalStyle = styled.section`
display: flex;
justify-content: space-between;
font-family: 'Roboto Condensed', sans-serif;
`

export const Products = styled.article`
display: grid;
grid-template-rows: 5vw 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr;
row-gap: 2vh;
column-gap: 2vh;
`

export const Header = styled.article`
grid-row: 1/2;
grid-column: 1/4;
padding: 2vh;
display: flex;
justify-content: space-between;
align-items: center;
`
export const Order = styled.article`
display:flex;
align-items: center;
gap: 5px;
height: 5vh;
`
