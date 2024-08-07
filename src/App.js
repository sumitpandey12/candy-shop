import { useState } from "react";
import "./App.css";
import FormField from "./components/formField";
import Header from "./components/header";
import ListOfItems from "./components/listOfItems";
import ItemProvider from "./store/Items/itemProvider";
import CartProvider from "./store/Cart/cartProvider";
import Cart from "./components/cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toggleCard(e) {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <ItemProvider>
      <CartProvider>
        <div className="App">
          {isCartOpen && <Cart onClose={toggleCard} />}
          <Header onClick={toggleCard} />
          <FormField />
          <ListOfItems />
        </div>
      </CartProvider>
    </ItemProvider>
  );
}

export default App;
