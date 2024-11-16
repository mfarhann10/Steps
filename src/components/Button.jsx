/* eslint-disable react/prop-types */
function Button({ onClickPrevious, onClickNext }) {
  return (
    <div className="buttons flex justify-between">
      <button
        className="px-6 py-2 rounded-full bg-indigo-500 text-white font-semibold text-sm hover:bg-indigo-600 transition duration-200"
        onClick={onClickPrevious}
      >
        Previous
      </button>
      <button
        className="px-6 py-2 rounded-full bg-indigo-500 text-white font-semibold text-sm hover:bg-indigo-600 transition duration-200"
        onClick={onClickNext}
      >
        Next
      </button>
    </div>
  );
}

export default Button;
