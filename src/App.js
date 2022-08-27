import { useState } from 'react';
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './context/CartProvider';

function App() {
  const [cartIsShown, setCartShown] = useState(false);

  const shownCardHandler = () => {
    setCartShown(true);
  };

  const hideCardHandler = () => {
    setCartShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={shownCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
