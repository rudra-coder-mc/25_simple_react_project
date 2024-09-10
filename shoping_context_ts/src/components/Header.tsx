import React, { useContext, useRef } from "react";
import ShopContext from "../shop/store-context";
{/* import CartModal from "./CartModal"; // Ensure this path matches your file structure */ }
import CartModal from "./CardModel";

const Header: React.FC = () => {
  const modal = useRef<HTMLDialogElement | null>(null);

  const shopContext = useContext(ShopContext);

  if (!shopContext) {
    throw new Error("Header must be used within a ShopProvider");
  }

  const { shoppingCart, } = shopContext;
  const cartItems = shoppingCart.items;
  const cartQuantity = cartItems.length;

  const handleOpenCartClick = () => {
    console.log("click to mode")
    if (modal.current) {
      modal.current.showModal();
    }
  };

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
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
};

export default Header;

