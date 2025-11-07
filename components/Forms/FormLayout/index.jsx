

export default function FormLayout({ children }) {
  return (
    <div className=" w-[450px] flex items-center justify-center bg-white p-6 rounded-2xl shadow-lg select-none">
        {children}
    </div>
  );
}