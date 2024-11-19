/* eslint-disable react/prop-types */
function Button({ onClick, text }) {
  return (
    <div>
      <button
        className="px-6 py-2 rounded-full bg-indigo-500 text-white font-semibold text-sm hover:bg-indigo-600 transition duration-200"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
