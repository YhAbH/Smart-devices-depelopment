import Copyright from "../Copyright/Copyrigt";

function Footer({ setX1, X1 }) {
  let nombre = "Yahir Abraham Hernandez Aguero";
  nombre = "Otro nombre";

  return (
    <>
      <footer className="footer">
        <h1>Componente de react con estado: {X1}</h1>
        <p>Nombre {nombre}</p>
        <button
          onClick={() => {
            setX1("Yahir Abraham");
            nombre = "Yahir Pro Papu";
          }}
        >
          Actualizar estado
        </button>
      </footer>
      <Copyright />
    </>
  );
}

export default Footer;
