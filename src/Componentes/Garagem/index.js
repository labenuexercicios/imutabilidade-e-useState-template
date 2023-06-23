import { Carro } from "../Carro";
import { Botao, Estacionamento, GaragemContainer } from "./styles";

export function Garagem(props) {
  const { automovel, nomeGaragem, setNome, setAutomovel, carro } = props;
  const { modelo, cor, ano, adicionadoPor, flex } = automovel;

  const alterarNome = () => {
    setNome("Easley");
  };

  return (
    <GaragemContainer>
      <h1>Garagem da {nomeGaragem}</h1>
      <Botao onClick={alterarNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={modelo}
          cor={cor}
          ano={ano}
          adicionadoPor={adicionadoPor}
          flex={flex}
          setAutomovel={setAutomovel}
          carro={carro}
        />
      </Estacionamento>
    </GaragemContainer>
  );
}
