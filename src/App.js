import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import reducer from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initState = {
  cart:cartItems,
  total:0,
  amount:0
}

const store = createStore(reducer,initState);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer/>
    </Provider>
  );
}

export default App;
