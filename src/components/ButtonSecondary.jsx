import { useState } from "preact/hooks";

const randomPos = () => ({
  top: `${10 + Math.random() * 80}%`,
  left: `${10 + Math.random() * 80}%`,
});

export default function ButtonSecondary({ text }) {
  const [pos, setPos] = useState(null);

  const runAway = (e) => {
    e.preventDefault();
    setPos(randomPos());
  };

  return (
    <button
      onMouseEnter={runAway}
      onTouchStart={runAway}
      style={
        pos
          ? {
              position: "fixed",
              ...pos,
              transform: "translate(-50%, -50%)",
              transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 9999,
            }
          : {}
      }
      className="rounded-full px-5 py-2 text-rose-700 bg-rose-200 uppercase cursor-pointer"
    >
      {text}
    </button>
  );
}
