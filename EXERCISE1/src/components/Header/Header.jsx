import "./Header.css";

import Copyright from "../Copyright/Copyrigt";

function Header({ setX1 }) {
  return (
    <>
      <footer className="Header">
        <h1>Titulo Header</h1>
        <button
          onClick={() => {
            setX1("El nuevo valor desde el Header");
          }}
        >
          Click en Header
        </button>
      </footer>
      <Copyright />
    </>
  );
}

export default Header;
