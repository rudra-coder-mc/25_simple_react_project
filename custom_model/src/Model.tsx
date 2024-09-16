import { ForwardedRef, forwardRef } from "react";

interface PropValidate {
  title: string;
  content: string;
  onClose: () => void; // Add a prop for the close handler
}

const Model = (
  { title, content, onClose }: PropValidate,
  ref: ForwardedRef<HTMLDialogElement>,
) => {
  return (
    <dialog ref={ref}>
      <div>
        <h1>{title}</h1>
        <div>{content}</div>
        <button onClick={onClose}>Close Modal</button> {/* Close button */}
      </div>
    </dialog>
  );
};

export default forwardRef<HTMLDialogElement, PropValidate>(Model);
