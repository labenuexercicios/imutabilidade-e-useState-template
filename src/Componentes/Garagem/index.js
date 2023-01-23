import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'
import { useState } from 'react';

export function Garagem({ nome, mudaNome }) {

    // Declarando 1 estado
    const [carro,setAutomovel] = useState({
    modelo: "Corsa",
    cor: "branco",
    ano: 2020,
    adicionadoPor: "Labenu",
    flex: true});

    // const mudaNome = () =>{
    //   setAutomovel({
    //   })
    // }

    // setAutomovel({
    //   modelo: "Fusca",
    //   cor: "Azul",
    //   ano: 2020,
    //   adicionadoPor: "Conway",
    //   flex: false
    // })
    const novoCarro = {
      modelo: "Fiesta",
      cor: "branco",
      ano: 2002,
      adicionadoPor: "Clara",
      flex: true
    };

    const [carro2,setAutomovel2] = useState(novoCarro)

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudaNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro 
        setAutomovel={setAutomovel}
          modelo = {carro.modelo}
          cor={carro.cor}
          ano={carro.ano}
          adicionadoPor={carro.adicionadoPor}
          flex = {carro.flex}
          novoCarro={novoCarro}
        />
        <Carro 
        setAutomovel={setAutomovel2}
          modelo = {carro2.modelo}
          cor={carro2.cor}
          ano={carro2.ano}
          adicionadoPor={carro2.adicionadoPor}
          flex = {carro2.flex}
          novoCarro={carro2}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
