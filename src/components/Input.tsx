import React, { type Ref } from "react";
import type { InputProps } from "../utils/type-utils.ts";

const Input: React.FC<InputProps> = ({ ref, label, textArea, ...props }) => {
  const classes: string =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textArea ? (
        <textarea
          ref={ref as Ref<HTMLTextAreaElement>}
          className={classes}
          {...props}
        />
      ) : (
        <input
          ref={ref as Ref<HTMLInputElement>}
          className={classes}
          {...props}
        />
      )}
    </p>
  );
};

export default Input;
