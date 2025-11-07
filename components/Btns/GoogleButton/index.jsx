"user client";

export default function GoogleButton({ onClick }) {

  return (
    <button
        onClick={onClick}
        className="w-full border border-gray-300 text-[#3d3d3d] py-3 rounded-xl flex items-center justify-center gap-2 bg-white hover:bg-[#f2f2f283] transition-colors duration-500 cursor-pointer text-[1rem]"
        >
        <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
        />
        Entrar com Google
    </button>
  );
}