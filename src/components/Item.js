import React from "react";
import Button from "../UI/button";
import cartContext from "../store/Cart/cartContext";
import { useContext } from "react";
import ItemContext from "../store/Items/itemContext";

const Item = (props) => {
  const cartCtx = useContext(cartContext);
  const itemCtx = useContext(ItemContext);

  const addToCartHandler = (e) => {
    let size = "";
    if (e.target.id == "s") size = "small";
    if (e.target.id == "m") size = "medium";
    if (e.target.id == "l") size = "large";
    if (props.item[size] > 0) {
      cartCtx.addItem(props.item, e.target.id);
      itemCtx.removeProduct(props.item, e.target.id);
    } else {
      window.alert("item are out of stock");
    }
  };

  return (
    <div className="flex items-center my-2">
      <h1 className="text-xl font-bold flex-1">{props.item.name}</h1>
      <p>{props.item.description}</p>
      <p className="font-bold text-red-500 flex-1">$ {props.item.price}</p>
      <div className="flex gap-2 flex-2">
        <Button
          title={`Buy Small (${props.item.small})`}
          id="s"
          onClick={addToCartHandler}
        />
        <Button
          title={`Buy Medium (${props.item.medium})`}
          id="m"
          onClick={addToCartHandler}
        />
        <Button
          title={`Buy Large (${props.item.large})`}
          id="l"
          onClick={addToCartHandler}
        />
      </div>
    </div>
  );
};

export default Item;
