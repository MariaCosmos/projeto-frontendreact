import React from "react";
import styled from "styled-components";

export const GlobalStyle = styled.section`
display: flex;
align-items: center;
flex-direction: column;
width: 198px;
heigth: 19vh;
border: 1px solid black;

`
export const Imag = styled.img`
height: 25vh;
max-width: 30vw;
`

export const Button = styled.button`
margin: 5px;
border-radius: 2px;
border: none;
cursor: pointer;
&:hover{ background-color: #CCC6BE }
`

export const Text = styled.p`
margin: 5px;
` 