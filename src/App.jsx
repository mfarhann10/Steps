import { useEffect, useState } from "react";
import "../public/css/styles.css";
/* eslint-disable react/prop-types */
function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl">Learn React from scratch</h1>
      <p className="font-semibold">{advice}</p>
      <Message count={count} />
      <button onClick={getAdvice} className="px-4 py-2 rounded-lg bg-cyan-200">
        Get Advice
      </button>
    </div>
  );
}

function Message(props) {
  return (
    <p className="font-semibold">
      You have read {props.count} pieces of advices
    </p>
  );
}

export default App;
