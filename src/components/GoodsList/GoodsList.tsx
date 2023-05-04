import React from "react";
import { Row, Col } from "antd";
import { GoodsItem } from "../GoodsItem/GoodsItem";

export const GoodsList = () => {
  return (
    <Row gutter={[16, 16]}>
      {["1", "2", "3", "4", "5", "6", "7"].map((id) => (
        <Col span={8} key={id}>
          <GoodsItem
            id={id}
            name={`Название еды ${id}`}
            image="http://placeimg.com/640/480/any"
            price={147}
            selected={["2", "3"].includes(id)}
            onAdd={console.log}
            onDelete={console.log}
          />
        </Col>
      ))}
    </Row>
  );
};
