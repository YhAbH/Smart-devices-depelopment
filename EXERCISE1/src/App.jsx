import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { AppContext } from "./components/Context/AppContext";
import Background from "./components/background/Background";
import { useState } from "react";
import "./App.css";

function App() {
  let name = "Yahir Abraham Hernandez Aguero";
  const [X1, setX1] = useState("START VALUE");
  const [c1, setC1] = useState("Rowan Networks");
  const [copyright, setCopyright] = useState("Derechos reservados UTLD");

  return (
    <AppContext.Provider value={{ c1, setC1, copyright, setCopyright }}>
      <header>
        <h1>Dentro del run va el codigo HTML</h1>
        <p>{name}</p>
        <p>ESTO ES PARTE DEL main.jsx</p>
      </header>

      <Header setX1={setX1} />

      <Background>
        <Main X1={X1} />
        <Footer setX1={setX1} X1={X1} />
      </Background>

      <h1>Esto esta en App {X1}</h1>
      <h1>{c1}</h1>
    </AppContext.Provider>
  );
}

export default App;
