"use client";

export default function FormLayout({ children, visible }) {
  return (
    <div className={visible ? "hidden" : "flex" + 
    "w-full sm:w-[420px]  items-center justify-center bg-white p-8 rounded-[35px] shadow-lg select-none"}>
        {children}
    </div>
  );
}