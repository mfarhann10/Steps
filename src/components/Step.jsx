import { useState } from "react";
import messages from "../data/messages";
import Button from "./Button";
import Message from "./Message";

/* eslint-disable react/prop-types */
function Step() {
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
    <div>
      <button
        className=" top-4 right-4 border-none bg-transparent cursor-pointer text-4xl text-current hover:text-indigo-600"
        onClick={() => setIsOpen((is) => !is)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="bg-gray-100 max-w-lg mx-auto mt-24 p-8 rounded-xl shadow-lg space-y-8">
          {/* Steps */}
          <div className="numbers flex justify-between">
            <div className={step >= 1 ? activeStep : notActiveStep}>1</div>
            <div className={step >= 2 ? activeStep : notActiveStep}>2</div>
            <div className={step >= 3 ? activeStep : notActiveStep}>3</div>
          </div>
          {/* Message */}
          <Message step={step}>{messages[step - 1]}</Message>

          {/* Buttons */}
          <div className="buttons flex justify-between">
            <Button onClick={handlePrevious}>
              {/* Children Props */}
              <span>👈</span>Previous
            </Button>
            <Button onClick={handleNext}>
              {/* Children Props */}
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Step;
