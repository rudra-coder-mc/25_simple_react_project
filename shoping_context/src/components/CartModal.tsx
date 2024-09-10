import React, { ForwardedRef, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';
import { CartItem } from '../types';

interface CartModalProps {
  cartItems: CartItem[];
  onUpdateCartItemQuantity: (productId: string, amount: number) => void;
  title: string;
  actions: React.ReactNode;
}

const CartModal = (
  { cartItems, onUpdateCartItemQuantity, title, actions }: CartModalProps,
  ref: ForwardedRef<HTMLDialogElement>
) => {
  return createPortal(
    <dialog id="modal" ref={ref}>
      <h2>{title}</h2>
      <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')!
  );
};

export default forwardRef(CartModal);

