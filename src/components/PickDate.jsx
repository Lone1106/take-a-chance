import { useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";

import ButtonPrimary from "./ButtonPrimary";

import { step, answerData } from "../app.jsx";

export default function PickDate() {
  const formRef = useRef(null);
  const disabled = useSignal(true);

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
          <label>
            <span className="opacity-50">Datum:</span>
            <input
              className="block mt-2 border border-black/20 rounded-xl bg-white text-black/90 px-5 py-2 w-full invert"
              type="date"
              name="date"
              required
            />
          </label>
          <label>
            <span className="opacity-50">Zeit:</span>
            <input
              className="block mt-2 border border-black/20 rounded-xl bg-white text-black/90 px-5 py-2 w-full invert"
              type="time"
              name="time"
              required
            />
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
