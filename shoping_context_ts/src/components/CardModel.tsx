import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Card.tsx';

// Define the props type for the CartModal component
interface CartModalProps {
  title: string;
  actions: React.ReactNode;
}


// Forwarding ref to the dialog element
const CartModal = forwardRef<HTMLDialogElement, CartModalProps>(
  ({ title, actions }, ref) => {
    const container = document.getElementById('modal');

    if (!container) {
      console.error('Target container for portal not found');
      return null;
    }
    return createPortal(
      <dialog id="modal" ref={ref}>
        <h2>{title}</h2>
        <Cart />
        <form method="dialog" id="modal-actions">
          {actions}
        </form>
      </dialog>,
      document.getElementById('modal')!
    );
  }
);

export default CartModal;

