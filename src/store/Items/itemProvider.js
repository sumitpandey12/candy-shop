import { useState } from "react";
import ItemContext from "./itemContext";

const ItemProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addProductHandler = (product) => {
    console.log(product);
    const newProduct = {
      ...product,
      id: Math.random(),
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const removeProductHandler = (product, size) => {
    const itemIndex = products.findIndex((item) => item.id === product.id);
    console.log("Removed");
    if (itemIndex !== -1) {
      const product = products[itemIndex];
      const updatedItem = {
        ...product,
        small: size == "s" ? product.small - 1 : product.small,
        medium: size == "m" ? product.medium - 1 : product.medium,
        large: size == "l" ? product.large - 1 : product.large,
      };
      const updatedItems = [...products];
      updatedItems[itemIndex] = updatedItem;
      setProducts([...updatedItems]);
      console.log("Removed");
    }
  };

  const itemContext = {
    products: products,
    addProducts: addProductHandler,
    removeProduct: removeProductHandler,
  };

  return (
    <ItemContext.Provider value={itemContext}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
