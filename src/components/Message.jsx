/* eslint-disable react/prop-types */
function Message({ step, children }) {
  return (
    <div className="message text-center text-xl font-semibold text-gray-800 space-y-4">
      <p>
        Step {step} : {children}
      </p>
    </div>
  );
}

export default Message;
