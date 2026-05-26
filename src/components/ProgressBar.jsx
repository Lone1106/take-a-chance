import { step, maxSteps } from "../app";

export default function ProgressBar() {
  const progress = (step.value / maxSteps) * 100;

  return (
    <div className="absolute top-0 left-0 right-0 h-1.5 bg-black-800">
      <div
        className="h-full bg-rose-700 transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
