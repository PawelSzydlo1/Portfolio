import React from "react";
import logo from "../../Assets/logoWhite.svg";
import "./index.css";
export default function Logo() {
  return (
    <div className="LogoContainer">
      <img className="LogoImage" src={logo} />
    </div>
  );
}
