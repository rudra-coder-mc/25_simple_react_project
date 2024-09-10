import React, { forwardRef, ForwardRefRenderFunction } from "react";

interface BaseProps {
  label: string;
  className: string;
  textarea?: boolean; // Optional prop to render a textarea instead of input
}
type InputProps = BaseProps &
  (
    | React.InputHTMLAttributes<HTMLInputElement>
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>
  );
// Define the component using ForwardRefRenderFunction
const Input: ForwardRefRenderFunction<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
> = ({ label, textarea, className, ...props }, ref) => {
  return (
    <p className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">{label}</label>
      {textarea ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={`resize-none ${className}`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className={className}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </p>
  );
};

export default forwardRef(Input);
