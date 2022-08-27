import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartShown] = useState(false);

  const shownCardHandler = () => {
    setCartShown(true);
  };

  const hideCardHandler = () => {
    setCartShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={shownCardHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
