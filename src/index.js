import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//elemento
//const elemento = <h2>Ola elemento</h2>; //JSX
//const elemento2 = React.createElement(
//  "div",
//  null,
//  React.createElement("h2", null, "Ola elemento 2")
//);

//function MostrarI(props){
//  return <p>{props.i}</p>
//}
//Componente: functional component
//function App(props) {
//  const [i, setI] = useState(10);

// const increment = () => {
//   setI(i + 1);
// };

// return (
//   <div className="App">
//     <h1>
//      Hello {props.name} {i}
//     </h1>
//     <button onClick={increment}>Incrementar</button>
//     <h2>Start editing to see some magic happen!</h2>
//     {elemento}
//     {elemento2}
//     <MostrarI i={i} />
//   </div>
// );
//}

function App() {
  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado == "ENTRADA") {
    return <button onClick={iniciarJogo}>Comecar a jogar!</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2);
    setPalpite(proxPalpite);
  };

  return (
    <div className="App">
      <p>O seu numero é {palpite}</p>
      <p>
        Min: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor</button>
      <button>Acertou</button>
      <button>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Ronaldo" />, rootElement);
