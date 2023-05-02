import Carro from "../carro/Carro";
import { Button, EstilizacaoDaGaragem } from "./styledGaragem";

function Garagem(props) {

  const alterarEstadoNome= () => {
    props.setNome("gabo")
  }

  const carro1= {
    nome: "ka",
    flex: "sim",
    ano: 2002,
  }

  const carro2= {
    nome: "celta",
    flex: "sim",
    ano: 2002,
  }

  const carro3= {
    nome: "uno",
    flex: "sim",
    ano: 2002,
  }


  return (
    <EstilizacaoDaGaragem>
      <h1>Garagem da {props.nome}</h1>
      <button onClick={alterarEstadoNome}>Alterar o nome da garagem</button>
      <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      <Carro
        adicionadoPor={props.nome}
        cor={"Vermelho"}
        ano={2022}
        flex={"true"}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={"Verde"}
        ano={2020}
        flex={"false"}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={"Amarelo"}
        ano={2009}
        flex={"false"}
      />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
    </EstilizacaoDaGaragem>
  );
}

export default Garagem;
