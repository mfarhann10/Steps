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
  function handlePrevious() {
    if (step < messages.length - 1) {
      return null;
    }
    setStep(step - 1);
  }

  function handleNext() {
    if (step > messages.length - 1) {
      return null;
    }
    setStep(step + 1);
  }
  const activeStep =
    "w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-lg font-bold text-white";
  const notActiveStep =
    "w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold text-gray-700";
  return (
    <div className="steps bg-gray-100 max-w-lg mx-auto mt-24 p-8 rounded-xl shadow-lg space-y-8">
      {/* Steps */}
      <Step step={step} activeStep={activeStep} notActiveStep={notActiveStep} />

      {/* Message */}
      <Message step={step} message={messages} />

      {/* Buttons */}
      <Button onClickPrevious={handlePrevious} onClickNext={handleNext} />
    </div>
  );
}

export default App;
