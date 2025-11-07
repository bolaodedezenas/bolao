"use client";
import { forwardRef } from "react";

const InputUi = forwardRef(function InputUi({ type, placeholder, ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      {...props}
      className="block text-[1.2rem] placeholder:text-[1.2rem] placeholder:text-neutral-500  font-medium text-neutral-500 mb-1 p-2 pl-4 rounded w-full outline-0 bg-transparent cursor-pointer"
    />
  );
});

export default InputUi;
