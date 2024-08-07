import React, { useContext } from "react";
import Button from "../UI/button";
import cartContext from "../store/Cart/cartContext";

const Header = (props) => {
  const cartCtx = useContext(cartContext);
  const cartSize = cartCtx.items.length;
  const numberOfCartItem = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.small + item.medium + item.large;
  }, 0);

  return (
    <div className="border p-2 flex justify-between">
      <h1 className="self-center text-2xl font-bold">Candy Shop</h1>
      <Button
        title={`Cart (${numberOfCartItem})`}
        className="order-last"
        onClick={props.onClick}
      />
    </div>
  );
};

export default Header;
