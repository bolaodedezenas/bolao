"use client";

export default function FormLayout({ children, visible }) {
  return (
    <div className={visible ? "hidden" : "flex" + 
    " sm:w-[420px]  items-center justify-center bg-white p-6 rounded-[35px] shadow-lg select-none"}>
        {children}
    </div>
  );
}