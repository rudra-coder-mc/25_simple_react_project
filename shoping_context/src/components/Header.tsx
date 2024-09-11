import { RefObject, useRef } from 'react';

import CartModal from './CartModal';
import { useContext } from 'react';
import ShopContext from '../shop/ShopingContext';





// Define a type for CartModal ref
interface CartModalRef {
  showModal: () => void;
}


export default function Header() {

  // const { items } = useContext(ShopContext);

  const shopingData = useContext(ShopContext);

  console.log(shopingData);


  const modal: RefObject<CartModalRef> = useRef<CartModalRef>(null);

  const cartQuantity = shopingData?.items.length;
  console.log(cartQuantity);


  function handleOpenCartClick() {
    if (modal.current) {

      modal.current.showModal()
    }
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity && cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
      />
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
