import React from "react";

const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item, size) => {},
  removeItem: (id, size) => {},
});

export default cartContext;
