import { signal } from "@preact/signals";

import ProgressBar from "./components/ProgressBar";
import StartingScreen from "./components/StartingScreen";
import LetsStart from "./components/LetsStart";
import PickDate from "./components/PickDate";
import PickActivtiy from "./components/PickActivity";
import End from "./components/End";
import Thanks from "./components/Thanks";

export const step = signal(0);
export const maxSteps = signal(5);
export const answerData = signal({ date: "", time: "", activity: "" });

export function App() {
  return (
    <div className="min-h-svh p-4 flex items-center justify-stretch dots bg-black text-white">
      <h1 className="sr-only">Take a chance date appointment maker</h1>
      <div className="bg-black-900 border border-white/15 rounded-3xl p-10 md:p-16 relative overflow-hidden mx-auto max-w-3xl w-full">
        <ProgressBar />
        <StartingScreen />
        <LetsStart />
        <PickDate />
        <PickActivtiy />
        <End />
        <Thanks />
      </div>
    </div>
  );
}
