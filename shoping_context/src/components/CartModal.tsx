import React, { ForwardedRef, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';

interface CartModalProps {
  title: string;
  actions: React.ReactNode;
}

const CartModal = (
  { title, actions }: CartModalProps,
  ref: ForwardedRef<HTMLDialogElement>
) => {
  // Ensure the portal target is set correctly
  const modalRoot = document.getElementById('modal-root') || document.body;

  return createPortal(
    <dialog ref={ref}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    modalRoot
  );
};

// Forwarding the ref correctly to HTMLDialogElement
export default forwardRef<HTMLDialogElement, CartModalProps>(CartModal);

