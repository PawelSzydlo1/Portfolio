import React from "react";
import { Layout } from "antd";
import facebook from "../../Assets/facebook.svg";
import linkedIn from "../../Assets/linkedin.svg";
import github from "../../Assets/github.svg";
import "./index.css";
export function Footer() {
  const { Footer } = Layout;

  return (
    <Footer className="FooterContainer">
      <div className="ContactContainer">
          <h3>Paweł Szydło</h3>
          <h3>pawel.szydlo.99@gmail.com</h3>
          <h3>503797091</h3>
      
      </div>
      <div className="SocialContainer">
        <img className="IconMedia" src={facebook} />
        <img className="IconMedia" src={github} />
        <img className="IconMedia" src={linkedIn} />
      </div>
    </Footer>
  );
}
