import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import React, {useState} from "react"
export default function App() {
  const [nome, setNome] =useState("BarbosaB")
  
  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome}  setNome={setNome}/>
    </div>
  )
}
