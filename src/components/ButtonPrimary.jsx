import { step, maxSteps } from "../app.jsx";

export default function ButtonPrimary({
  text,
  type = "button",
  func,
  disabled = false,
}) {
  const handleClick = (e) => {
    if (step.value < maxSteps) {
      step.value += 1;
      func?.(e);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className="disabled:opacity-50 rounded-full text-sm px-5 py-2.5 text-white bg-rose-700 disabled:cursor-not-allowed not-disabled:cursor-pointer transition duration-300 not-disabled:hover:opacity-90 not-disabled:focus-within:opacity-90 not-disabled:opacity-100 border border-transparent"
    >
      {text}
    </button>
  );
}
