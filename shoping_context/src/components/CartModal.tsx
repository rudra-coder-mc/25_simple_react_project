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
};

export default forwardRef(CartModal);

