import React from "react";

const CartItem = (props) => {
  return (
    <div className="flex my-2 items-center">
      <h1 className="flex-1 text-lg font-bold">{props.item.name}</h1>
      <p className="flex-1">{props.item.description}</p>
      <p className="font-bold text-red-500 flex-1">${props.item.price}</p>
      <div className="grow flex gap-8 items-center">
        <p>{props.item.small}</p>
        <p>{props.item.medium}</p>
        <p>{props.item.large}</p>
      </div>
      <p className="flex-1 font-bold text-red-500">
        ${props.item.totalAmount ?? 0}
      </p>
    </div>
  );
};

export default CartItem;
