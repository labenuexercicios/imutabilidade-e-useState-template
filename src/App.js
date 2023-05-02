import { useState } from "react";
import Garagem from "./Componentes/garagem/Garagem";
import { GlobalStyled } from "./globalStyled";

export default function App() {
  // const nome = "Turma";
  const [nome, setNome]= useState("Turma")
  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} setNome={setNome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}
