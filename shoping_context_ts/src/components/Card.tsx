import React, { useContext } from 'react';
import ShopContext from '../shop/store-context';

const Card: React.FC = () => {
  const shopContext = useContext(ShopContext);

  if (!shopContext) {
    throw new Error("Card must be used within a ShopProvider");
  }

  const { shoppingCart, handleUpdateCartItemQuantity } = shopContext;

  const totalPrice = shoppingCart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {shoppingCart.items.length === 0 && <p>No items in cart!</p>}
      {shoppingCart.items.length > 0 && (
        <ul id="cart-items">
          {shoppingCart.items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleUpdateCartItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleUpdateCartItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
};

export default Card;

