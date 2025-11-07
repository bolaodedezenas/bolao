"use client";
import { forwardRef } from "react";

const InputUi = forwardRef(function InputUi({ type, placeholder, autocomplete, ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      {...props}
      className="
        block text-[1.2rem] 
        placeholder:text-[1.2rem] 
        placeholder:text-neutral-500  
        font-medium 
        text-[rgb(var(--icon-secundary))]
        mb-1 p-2 pl-4 
        rounded 
        w-full 
        outline-0 
        bg-[#f1f1f1] 
        cursor-pointer"
      autoComplete={autocomplete}
    />
  );
});

export default InputUi;
