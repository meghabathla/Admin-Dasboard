import { DollarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

import { Text } from "../text";

const DealsChart = () => {
  return (
    <Card
      style={{ height: "100%" }}
      headStyle={{ padding: "8px 16px" }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <DollarOutlined />
          <Text size="sm" style={{ marginLeft: "0.5rem" }}></Text>
        </div>
      }
    >
      {" "}
      DealsChart
    </Card>
  );
};

export default DealsChart;
