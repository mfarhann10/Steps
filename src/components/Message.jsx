/* eslint-disable react/prop-types */
function Message({ step, message }) {
  return (
    <p className="message text-center text-xl font-semibold text-gray-800 space-y-4">
      Step {step} : {message[step - 1]}
    </p>
  );
}

export default Message;
