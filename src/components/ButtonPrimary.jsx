import { step } from "../app.jsx";

export default function ButtonPrimary({
  text,
  type = "button",
  func,
  disabled = false,
}) {
  const handleClick = (e) => {
    if (step.value < 4) {
      step.value += 1;
      func?.(e);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className="disabled:opacity-50 rounded-full px-5 py-2 text-white bg-rose-700 uppercase disabled:cursor-not-allowed not-disabled:cursor-pointer transition duration-300 not-disabled:hover:bg-pink-600 not-disabled:hover:-translate-y-1.5 not-disabled:active:translate-0"
    >
      {text}
    </button>
  );
}
