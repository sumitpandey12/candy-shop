import React, { useState, useContext } from "react";
import Input from "../UI/input";
import Button from "../UI/button";
import Card from "../UI/Card";
import ItemContext from "../store/Items/itemContext";

const initialData = {
  name: "",
  description: "",
  price: 0,
};

const FormField = (props) => {
  const [formData, setFormData] = useState(initialData);

  const itemsCtx = useContext(ItemContext);

  function changeNameHandler(e) {
    setFormData((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }
  function changeDescriptionHandler(e) {
    setFormData((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  }
  function changePriceHandler(e) {
    setFormData((prev) => ({
      ...prev,
      price: e.target.value,
    }));
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    if (
      formData.name.length !== 0 &&
      formData.description !== "" &&
      formData.price > 0 &&
      formData.small !== null &&
      formData.medium !== null &&
      formData.large !== null
    ) {
      itemsCtx.addProducts(formData);
      setFormData((prev) => ({
        ...prev,
        name: "",
        description: "",
        price: 0,
        large: 0,
        medium: 0,
        small: 0,
      }));
    } else {
      window.alert("Fill the valid form");
    }
  }

  return (
    <Card className="m-4">
      <form onSubmit={onSubmitHandler} className="flex gap-2">
        <Input
          type="text"
          label="Shoes Name"
          name="name"
          placeholder="Enter Full Shoes Name"
          value={formData.name}
          onChange={changeNameHandler}
        />
        <Input
          type="text"
          label="Description"
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={changeDescriptionHandler}
        />
        <Input
          type="number"
          label="Price"
          name="price"
          placeholder="$"
          value={formData.price}
          onChange={changePriceHandler}
        />
        <Button title="Add Product" type="submit" />
      </form>
    </Card>
  );
};

export default FormField;
