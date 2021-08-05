import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { MainCard } from "../../Components/Content/MainCard/MainCard";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
export function Home() {
  const { Content } = Layout;
  return (
    <Layout>
      <BrowserRouter>
        <Navbar />

        <Content className="ContentContainer">
          <div className="ContentBackground">
            <Switch>
              <Route exact path="/" component={MainCard} />
              <Route exact path="/project" component={Project} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </Content>

        <Footer />
      </BrowserRouter>
    </Layout>
  );
}
