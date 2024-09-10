import { RefObject, useRef } from 'react';

import CartModal from './CartModal';
import { ShoppingCartState } from '../types';
interface HeaderProps {
  cart: ShoppingCartState;
  onUpdateCartItemQuantity: (productId: string, amount: number) => void;
}

// Define a type for CartModal ref
interface CartModalRef {
  showModal: () => void;
}


export default function Header({ cart, onUpdateCartItemQuantity }: HeaderProps
) {
  const modal: RefObject<CartModalRef> = useRef<CartModalRef>(null);

  const cartQuantity = cart.items.length;

  function handleOpenCartClick() {
    if (modal.current) {

      modal.current.showModal()
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
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
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
