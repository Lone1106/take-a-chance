import { signal } from "@preact/signals";

import StartingScreen from "./components/StartingScreen";
import LetsStart from "./components/LetsStart";
import PickDate from "./components/PickDate";
import PickActivtiy from "./components/PickActivity";
import End from "./components/End";

export const step = signal(0);
export const answerData = signal({ date: "", time: "", activity: "" });

export function App() {
  return (
    <div className="h-svh flex items-center justify-stretch shapes">
      <h1 className="sr-only">Take a chance date appointment maker</h1>
      <div className="px-4 md:px-6 mx-auto max-w-6xl w-full">
        <div className="bg-white border-2 border-rose-700 rounded-3xl p-10 md:p-16">
          <StartingScreen />
          <LetsStart />
          <PickDate />
          <PickActivtiy />
          <End />
        </div>
      </div>
    </div>
  );
}
