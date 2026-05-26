import { useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";

import ButtonPrimary from "./ButtonPrimary";

import { step, answerData } from "../app.jsx";

export default function PickDate() {
  const formRef = useRef(null);
  const disabled = useSignal(true);

  const minDate = new Date().toISOString().split("T")[0];

  const buttonFunc = (e) => {
    e.preventDefault();
    answerData.value = {
      ...answerData.value,
      date: formRef.current.date.value,
      time: formRef.current.time.value,
    };
  };

  const checkValid = () => {
    if (formRef.current.checkValidity()) {
      disabled.value = false;
    }
  };

  return (
    <div className={`${step.value !== 2 ? "hidden" : "block"}`}>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajR6NjFhd2ViMWM5NnNoZTIxanA1ZThiaDdkbjNmNXA0dHM5djhudSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ybr8ne38XHBTK366Xy/giphy.gif"
        alt="Penguin with calendar"
        loading="lazy"
        className="size-32 mx-auto block mb-8 rounded-xl object-cover"
      />
      <form onChange={checkValid} ref={formRef}>
        <h2 className="text-center text-4xl text-rose-700">
          Also....wann hast du Zeit?
        </h2>
        <div className="md:mx-auto md:max-w-2/3 mt-8 grid grid-cols-1 gap-4">
          <label className="block">
            <span className="opacity-50">Datum:</span>
            <input
              className="block mt-2 border border-black/20 rounded-xl bg-white text-black/90 px-5 py-2 invert w-full max-w-[85%] md:max-w-none"
              type="date"
              name="date"
              min={minDate}
              required
            />
          </label>
          <label className="block">
            <span className="opacity-50">Zeit:</span>
            <div className="relative  max-w-[85%] md:max-w-none">
              <select
                name="time"
                required
                className="appearance-none block mt-2 border border-black/20 rounded-xl bg-white text-black/90 px-5 py-2 invert w-full"
              >
                <option value="">Zeit auswählen</option>
                {Array.from({ length: 13 }, (_, i) => i + 10).map((h) => (
                  <option value={`${String(h).padStart(2, "0")}:00`}>
                    {String(h).padStart(2, "0")}:00
                  </option>
                ))}
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 size-6 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </label>
        </div>
        <div className="mt-12 flex gap-2 items-center justify-center">
          <ButtonPrimary
            text="Zeitpunkt bestätigen"
            type="submit"
            func={buttonFunc}
            disabled={disabled.value}
          />
        </div>
      </form>
    </div>
  );
}
