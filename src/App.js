import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState} from "react"

export default function App() {
   
  // const[estado, setEstado]=useState(estado inicial)
  const [nome, setNome] = useState("labenu")

  const[automovel, setAutomovel] = useState({
    modelo:"Corsa",
    cor:"Branco",
    ano:2020,
    adicionadoPor:"Labenu",
    flex: true
  })
   const fusca = {
    modelo:"Fusca",
    cor:"Amarelo",
    ano:1979,
    adicionadoPor:"Jordana",
    flex: false
  }

return (
  <div className="App">
  <GlobalStyled />

  <Garagem 
  nomeGaragem={nome}
  setNome={setNome}
  automovel={automovel}
  setAutomovel={setAutomovel}
  carro={fusca}
  />
</div>
)
}
