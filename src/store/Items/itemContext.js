import React from "react";

const ItemContext = React.createContext({
  products: [],
  addProducts: (product) => {},
  removeProduct: (id, size) => {},
});

export default ItemContext;
