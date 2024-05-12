import DealsChart from "@/components/home/deals-chart";
import UpcomingEvents from "@/components/home/upcoming-events";
import { Row, Col } from "antd";
import React from "react";

export const Home = () => {
  return (
    <div>
      <Row gutter={[32, 32]} style={{ marginTop: "32px" }}>
        <Col xs={24} sm={24} xl={8} style={{ height: "460px" }}>
          <UpcomingEvents />
        </Col>
        <Col xs={24} sm={24} xl={8} style={{ height: "460px" }}>
          <DealsChart />
        </Col>
      </Row>
    </div>
  );
};
