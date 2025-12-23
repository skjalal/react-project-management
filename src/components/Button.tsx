import React, { type PropsWithChildren } from "react";
import type { ButtonProps } from "../utils/type-utils";

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
