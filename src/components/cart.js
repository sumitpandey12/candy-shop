import React, { useContext } from "react";
import Modal from "../UI/Modal";
import cartContext from "../store/Cart/cartContext";
import CartItem from "./CartItem";
import Button from "../UI/button";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);

  const listOfCartItems = cartCtx.items.map((item) => (
    <li>
      <CartItem item={item} />
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <h1>Cart</h1>
      <div className="flex my-2 items-center">
        <h1 className="flex-1 text-lg font-bold">Name</h1>
        <p className="flex-1">Description</p>
        <p className="font-bold text-red-500 flex-1">Price</p>
        <div className="grow flex gap-8 items-center">
          <p>S</p>
          <p>M</p>
          <p>L</p>
        </div>
        <p className="flex-1 font-bold text-red-500">Product Price</p>
      </div>
      <div className="w-full h-0.5 bg-gray-500"></div>
      <ul>{listOfCartItems}</ul>
      <div className="w-full h-0.5 bg-gray-500"></div>
      <div className="flex my-3 gap-4">
        <p className="text-xl font-bold">Total Amount: </p>
        <p className="font-bold text-xl text-red-500">${cartCtx.totalAmount}</p>
      </div>
      <div className="flex gap-4">
        <div className="flex-1"></div>
        <Button title="Order" onClick={cartCtx.removeItem} />
        <Button title="Cancel" onClick={props.onClose} />
      </div>
    </Modal>
  );
};

export default Cart;
