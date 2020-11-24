import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import reducer from './reducers';
import {createStore} from 'redux';

const initState = {
  cart:cartItems,
  total:0,
  amount:0
}

const store = createStore(initState,reducer);

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
