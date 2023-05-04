import React, { FC } from "react";
import { Modal, List, message } from "antd";

import { CartItem } from "../CartItem/CartItem";

interface Props {
  isOpen: boolean;
  onClose: () => any;
}

export const CartModal: FC<Props> = ({ isOpen, onClose }) => {
  const data = [
    {
      id: "2",
      name: "Название еды 2",
      description: "Самая лучшая еда 2",
      image: "http://placeimg.com/640/480/any",
      price: 147
    },
    {
      id: "3",
      name: "Название еды 3",
      description: "Самая лучшая еда 3",
      image: "http://placeimg.com/640/480/any",
      price: 258
    }
  ];

  return (
    <Modal
      title="Ваш заказ"
      visible={isOpen}
      onOk={() => {
        message.success("Оплачено");
        onClose();
      }}
      onCancel={onClose}
      okText={`Оплатить ${data
        .reduce((sum, item) => (sum += item.price), 0)
        .toLocaleString("ru-RU", {
          style: "currency",
          currency: "RUB",
          maximumFractionDigits: 0
        })}`}
      cancelText="Отменить"
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => <CartItem {...item} onDelete={console.log} />}
      />
    </Modal>
  );
};
