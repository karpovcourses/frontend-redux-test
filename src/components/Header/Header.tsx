import React, { useState } from "react";
import { Typography, Button, Affix } from "antd";

import { CartModal } from "../CartModal/CartModal";
import { useSelector } from "react-redux";
import { getCart } from "../../store/selectors";

export const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const cart = useSelector(getCart);
  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Affix>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 24,
            paddingBottom: 24
          }}
        >
          <Typography.Title style={{ marginBottom: 0 }}>
            McDonald’s
          </Typography.Title>
          {cart.length ? (
            <Button type="primary" onClick={showModal}>
              Корзина на{" "}
              {cart
                .reduce((sum, item) => (sum += item.price), 0)
                .toLocaleString("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                  maximumFractionDigits: 0
                })}
            </Button>
          ) : (
            <Button type="primary" disabled>
              Корзина пустует
            </Button>
          )}
        </section>
      </Affix>

      <CartModal isOpen={isModalVisible} onClose={hideModal} />
    </>
  );
};
