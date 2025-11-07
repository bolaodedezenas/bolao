

export default function Label({ children, id }) {
    return (
        <label htmlFor={id} className="block text-[1.2rem] font-bold text-gray-500 mb-1 cursor-pointer">
            {children}
        </label>
    );
}