"user client";


export default function SignInButton({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="text-[1.2rem] font-bold px-4 py-3 w-full bg-[var(--cornflower-blue-700)] text-white rounded-xl hover:bg-[var(--cornflower-blue-600)] transition duration-300 cursor-pointer mb-2"
    >
      {text}
    </button>
  );
}