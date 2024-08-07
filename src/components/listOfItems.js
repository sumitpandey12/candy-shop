import React, { useContext } from "react";
import ItemContext from "../store/Items/itemContext";
import Card from "../UI/Card";
import Item from "./Item";

const ListOfItems = (props) => {
  const itemCtx = useContext(ItemContext);

  const items = itemCtx.products.map((item) => (
    <div key={item.id}>
      <Item item={item} />
    </div>
  ));

  return (
    <Card className="m-4 flex">
      <h1 className="text-sm font-bold delf self-start my-2">
        List Of Products :
      </h1>
      {items.length > 0 ? <ul>{items}</ul> : <p>No Products</p>}
    </Card>
  );
};

export default ListOfItems;
