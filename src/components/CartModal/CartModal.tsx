import React, { FC } from "react";
import { Modal, List, message } from "antd";

import { CartItem } from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemCart, clearCart } from "../../store/actions";
import { Dispatch } from "../../store";
import { getCart } from "../../store/selectors";

interface Props {
  isOpen: boolean;
  onClose: () => any;
}

export const CartModal: FC<Props> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch<Dispatch>();
  const cart = useSelector(getCart);

  const onDelete = (id: string) => {
    dispatch(deleteItemCart(id));
  };

  const onClear = () => {
    dispatch(clearCart());
  };

  return (
    <Modal
      title="Ваш заказ"
      visible={isOpen}
      onOk={() => {
        message.success("Оплачено");
        onClose();
        onClear();
      }}
      onCancel={onClose}
      okText={`Оплатить ${cart
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
        dataSource={cart}
        renderItem={(item) => <CartItem {...item} onDelete={onDelete} />}
      />
    </Modal>
  );
};
