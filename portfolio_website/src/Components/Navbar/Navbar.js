import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.js";
import "./index.css";
export function Navbar() {
  const { Header } = Layout;
  return (
    <Header className="Header">
      <Logo />
      <Menu
        className="MenuItem"
        mode="horizontal"
        
      >
        <Menu.Item key="Home">
          <Link className="LinkStyled" to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="Project">
          <Link className="LinkStyled" to="/project">Project</Link>
        </Menu.Item>
        <Menu.Item key="Contact">
          <Link className="LinkStyled" to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
