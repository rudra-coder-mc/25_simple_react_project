import { RefObject, useRef, useContext } from 'react';
import CartModal from './CartModal';
import ShopContext from '../shop/ShopingContext';

export default function Header() {
  const shopingData = useContext(ShopContext);
  const modal: RefObject<HTMLDialogElement> = useRef(null); // Correct type here

  const cartQuantity = shopingData?.items.length || 0;

  function handleOpenCartClick() {
    if (modal.current) {
      modal.current.showModal(); // Correct use of HTMLDialogElement's showModal method
    }
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}

