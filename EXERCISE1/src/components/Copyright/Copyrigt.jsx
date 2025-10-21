import "./Copyright.css";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
function Copyright() {
  const { copyright } = useContext(AppContext);
  return (
    <>
      <div className="copyright"></div>
      <p className="copyright__paragraph">{copyright}</p>
    </>
  );
}

export default Copyright;
