import Jumbotron from "./Jumbotron";

function Main({ X1 }) {
  return (
    <>
      <h1>Compartiendo estado {X1}</h1>
      <h1>Mi nombre es Yahir Abraham Hernandez Aguero</h1>
      <Jumbotron texto={X1} />
    </>
  );
}

export default Main;
