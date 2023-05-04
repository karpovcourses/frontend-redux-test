import React from "react";
import { GoodsList } from "./components/GoodsList/GoodsList";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <div style={{ paddingBottom: 24 }}>
      <Header />

      <div style={{ paddingLeft: 16, paddingRight: 16 }}>
        <GoodsList />
      </div>
    </div>
  );
};
