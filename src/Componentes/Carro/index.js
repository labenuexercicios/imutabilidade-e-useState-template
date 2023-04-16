import { CarroContainer } from './styles'

export function Carro({automovel, setAutomovel,adicionadoPor,outrocarro}) {
 const {modelo,cor,flex,ano} = automovel
 function mudaCarro(name){
  setAutomovel(name)
 }
  return (
    <CarroContainer>
      <button onClick={()=> mudaCarro(outrocarro)}>Mudar Carro</button>
      <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
    </CarroContainer>
  )
}
