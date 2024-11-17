import { useState } from "react";
import Step from "./components/Step";
import Button from "./components/Button";
import Message from "./components/Message";

/* eslint-disable react/prop-types */
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step < messages.length - 1) {
      return null;
    }
    setStep((s) => s - 1);
  }

  function handleNext() {
    if (step > messages.length - 1) {
      return null;
    }
    setStep((s) => s + 1);
  }
  const activeStep =
    "w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-lg font-bold text-white";
  const notActiveStep =
    "w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold text-gray-700";
  return (
    <>
      <button
        className="absolute top-4 right-4 border-none bg-transparent cursor-pointer text-4xl text-current hover:text-indigo-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="bg-gray-100 max-w-lg mx-auto mt-24 p-8 rounded-xl shadow-lg space-y-8">
          {/* Steps */}
          <Step
            step={step}
            activeStep={activeStep}
            notActiveStep={notActiveStep}
          />

          {/* Message */}
          <Message step={step} message={messages} />

          {/* Buttons */}
          <Button onClickPrevious={handlePrevious} onClickNext={handleNext} />
        </div>
      )}
    </>
  );
}

export default App;
