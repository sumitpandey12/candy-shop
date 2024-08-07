import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [cartState, setCardState] = useState({
    items: [],
    totalAmount: 0,
  });

  const addItemHandler = (item, size) => {
    const small = size == "s" ? 1 : 0;
    const medium = size == "m" ? 1 : 0;
    const large = size == "l" ? 1 : 0;

    const itemIndex = cartState.items.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      const existingItem = cartState.items[itemIndex];

      const newItem = {
        ...existingItem,
        small: existingItem.small + small,
        medium: existingItem.medium + medium,
        large: existingItem.large + large,
        totalAmount: parseInt(existingItem.totalAmount) + parseInt(item.price),
      };

      const updatedItems = [...cartState.items];
      updatedItems[itemIndex] = newItem;

      setCardState({
        items: [...updatedItems],
        totalAmount: parseInt(cartState.totalAmount) + parseInt(item.price),
      });
    } else {
      const newItem = {
        id: Math.random(),
        ...item,
        small,
        medium,
        large,
        totalAmount: item.price,
      };
      setCardState({
        items: [...cartState.items, newItem],
        totalAmount: parseInt(cartState.totalAmount) + parseInt(item.price),
      });
    }
  };

  const removeItemHandler = (id, size) => {
    setCardState({
      items: [],
      totalAmount: 0,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
