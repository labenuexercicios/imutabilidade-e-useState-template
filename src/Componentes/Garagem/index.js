import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'
import { useState } from "react"
export function Garagem({ nome }) {
  const [automovel, setAutomovel] = useState({ modelo: "Corsa", cor: "Branco", ano: 2020, flex: true })
  const typecar1 = {modelo:"Voyage" ,cor:"Preto",ano:2019,flex:"true"}
  const typecar2 = {modelo: "GOl", cor:"Branco",ano:2015,flex:"true"}
  const mudaCarro= function(car){
    setAutomovel(car)
  }
  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={()=> mudaCarro(typecar1.modelo)}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          automovel={automovel}
          adicionadoPor={nome}
          setAutomovel={setAutomovel}
          outrocarro={typecar1}
        />
        <Carro
          automovel={automovel}
          adicionadoPor={nome}
          setAutomovel={setAutomovel}
          outrocarro={typecar2}
        />
        
      </Estacionamento>
    </GaragemContainer>
  )
}
