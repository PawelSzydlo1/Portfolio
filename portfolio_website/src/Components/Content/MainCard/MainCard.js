import React from "react";
import { Card } from "antd";
import "./index.css";
export function MainCard() {
  return (
    <div className="MainContainer">
      <Card className="CartContainer" bordered={false}>
        main cart
      </Card>
    </div>
  );
}
