import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const step = 1;
  const activeStep =
    "w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-lg font-bold text-white";
  const notActiveStep =
    "w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold text-gray-700";
  return (
    <div className="steps bg-gray-100 max-w-lg mx-auto mt-24 p-8 rounded-xl shadow-lg space-y-8">
      {/* Steps */}
      <div className="numbers flex justify-between">
        <div className={step >= 1 ? activeStep : notActiveStep}>1</div>
        <div className={step >= 2 ? activeStep : notActiveStep}>2</div>
        <div className={step >= 3 ? activeStep : notActiveStep}>3</div>
      </div>

      {/* Message */}
      <p className="message text-center text-xl font-semibold text-gray-800 space-y-4">
        Step {step} : {messages[step - 1]}
      </p>

      {/* Buttons */}
      <div className="buttons flex justify-between">
        <button className="px-6 py-2 rounded-full bg-indigo-500 text-white font-semibold text-sm hover:bg-indigo-600 transition duration-200">
          Previous
        </button>
        <button className="px-6 py-2 rounded-full bg-indigo-500 text-white font-semibold text-sm hover:bg-indigo-600 transition duration-200">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
