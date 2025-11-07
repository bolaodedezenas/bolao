"use client";

export default function FormLayout({ children, visible }) {
  return (
    <div className={visible ? "hidden" : "flex" + " w-[450px]  items-center justify-center bg-white p-6 rounded-2xl shadow-lg select-none"}>
        {children}
    </div>
  );
}