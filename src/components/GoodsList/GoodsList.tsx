import React from "react";
import { Row, Col, Spin } from "antd";
import { GoodsItem } from "../GoodsItem/GoodsItem";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "../../store";
import { fetchGoods, addItemCart, deleteItemCart } from "../../store/actions";
import { getGoods } from "../../store/selectors";
import { IGoodsItem } from "../../types";

export const GoodsList = () => {
  const dispatch = useDispatch<Dispatch>();
  const goods = useSelector(getGoods);
  const [isLoading, setLoader] = React.useState(false);

  const onAdd = (id: string) => {
    const current = goods.find((item: IGoodsItem) => item.id === id);
    if (current) {
      dispatch(addItemCart(current));
    }
  };

  const onDelete = (id: string) => {
    dispatch(deleteItemCart(id));
  };

  React.useEffect(() => {
    setLoader(true);
    dispatch(fetchGoods()).finally(() => setLoader(false));
  }, []);

  if (isLoading) {
    return <Spin></Spin>;
  }

  return (
    <Row gutter={[16, 16]}>
      {goods?.map((item: IGoodsItem, idx: number) => (
        <Col span={8} key={idx}>
          <GoodsItem
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            selected={["2", "3"].includes("1")}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        </Col>
      ))}
    </Row>
  );
};
