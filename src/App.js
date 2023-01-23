import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'


export default function App() {


  // Declarando 1 estado
  const [nome,setNome] = useState("Labenu");
  const mudaNome = () =>{
    setNome("Conway")
  }


  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome = {nome} mudaNome = {mudaNome} />
    </div>
  )
}
