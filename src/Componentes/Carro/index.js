import { CarroContainer } from './styles'

export function Carro({ modelo, cor, ano, adicionadoPor, flex, setAutomovel}) {


    // const setAutomovel({ 
    //   nomedomodelo: modelo,
    //   nomedacor: cor,
    //   anodoano: ano,
    //   seeflex: flex,
    // })
    // console.log(automovel)

    const mudaCarro = () =>{
    setAutomovel({
      modelo: "Fusca",
      cor: "Azul",
      ano: 2020,
      adicionadoPor: "Conway",
      flex: false

       })
    }
    // const novoCarro = {
    //   modelo: "Fiesta",
    //   cor: "branco",
    //   ano: 2002,
    //   adicionadoPor: "Clara",
    //   flex: true
    // };
  

  return (
    <CarroContainer>
      <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
      <button onClick={mudaCarro}>Muda carro</button>
    </CarroContainer>
  )
}
