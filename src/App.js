import ProductCards from './ProductCards/ProductCards';
import Filter from './Filter/Filter';
import Cart from './Cart/Cart';
import { GlobalStyle, Header, Products, Order } from './styled';
import produtos from "./produtos/produtos.json"
import { useFilter } from './hooks/useFilter';
import { useEffect, useState } from 'react';


function App() {
  const [inputs, onChange] = useFilter({valorMin: "", valorMax: "", buscaNome:""})
  const [cart, setCart] = useState([])
  const [valorTotal, setValorTotal] = useState(0)
  const [ordenacao, setOrdenacao] = useState("alfabetica")
  const [produtosQtd, setProdutosQtd] = useState(0)

  function addProduct(id,imag,nome,valor){
    const copyCart = [...cart]
    
    const item = copyCart.find((item)=> item.id === id)
    

    if (!item){
      copyCart.push({qtd:1, id:id, valor:valor, nome:nome, imag:imag})
    }else{
      item.qtd = item.qtd + 1
      copyCart.qtd = item.qtd
    }
    setCart(copyCart)
    setValorTotal(valorTotal + valor)
  }

  function removeProduct(id,nome){
    const copyCart = [...cart]
    setValorTotal(valorTotal - nome)
    const item = copyCart.find((item)=> item.id === id)

    if (item.qtd > 1){
      item.qtd = item.qtd - 1
      setCart(copyCart)
    }else{
      const cartFiltered = copyCart.filter((product)=> product.id !== id)
      setCart(cartFiltered)
    }

  }

  const arrayFiltrada = produtos
  .filter((produto) => {
    if(produto.nome.toLowerCase().includes(inputs.buscaNome.toLowerCase())){
      return produto
    }else if (inputs.buscaNome === ""){
      return produto
    }
  })
  .filter((produto) => {
    return produto.valor >= inputs.valorMin || inputs.valorMin === ""
  })
  .filter((produto) => {
    return produto.valor <= inputs.valorMax || inputs.valorMax === ""
  })
  .sort((produto1, produto2) => {
    switch(ordenacao){
      case "crescente":
        return produto1.valor - produto2.valor
      case "decrescente":
        return produto2.valor - produto1.valor
      default: 
      if(produto1.nome < produto2.nome) {
        return -1;
      } else {
        return true;}
    }
  })
  useEffect(() => { setProdutosQtd(arrayFiltrada.length) }, [inputs])

  
  return (
       <GlobalStyle>
      <Filter produtos={produtos} inputs={inputs}  onChange={ onChange}/>
      <Products>
        <Header>
          <p>Quantidade de produtos: {produtosQtd}</p>
          <Order>
          <label for={ordenacao}>Ordenação: </label>
          <select name="ordenacao" value={ordenacao} onChange={(ev) =>{setOrdenacao(ev.target.value)}}>
            <option value={"alfabetica"}>Alfabetica</option>
            <option value={"crescente"}>Crescente</option>
            <option value={"decrescente"} setected>Decrescente</option>
          </select>
          </Order>
        </Header>
        {arrayFiltrada
        .map((produto)=>{
          return <ProductCards addProduct={addProduct} key={produto.nome} produtos={produtos} id={produto.id} nome={produto.nome} valor={produto.valor} imag={produto.imag}/>
        })}
      </Products>
      <Cart removeProduct={removeProduct} cart={cart} valorTotal={valorTotal}/>
    </GlobalStyle> 
  );
}

export default App;
