import { useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import emailjs from "@emailjs/browser";

import ButtonPrimary from "./ButtonPrimary";
import Activity from "./Activity";

import { step, answerData } from "../app.jsx";

export default function PickActivtiy() {
  const formRef = useRef(null);
  const disabled = useSignal(true);

  const buttonFunc = (e) => {
    e.preventDefault();
    answerData.value = {
      ...answerData.value,
      activity: formRef.current.activity.value,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        date: answerData.value.date,
        time: answerData.value.time,
        activity: answerData.value.activity,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
  };

  const checkValid = () => {
    if (formRef.current.checkValidity()) {
      disabled.value = false;
    }
  };
  return (
    <div className={`${step.value !== 3 ? "hidden" : "block"}`}>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzk5aGZldXc2N3M1YXE4bHRzcmtsYTRpNmNvaG82NDkxNDFtdHhwMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gXQgsu5t4eFrnsP7xN/giphy.gif"
        alt="Anime girl questioning"
        loading="lazy"
        className="size-44 mx-auto block mb-8 rounded-xl object-cover"
      />
      <form onChange={checkValid} ref={formRef}>
        <h2 className="text-center text-4xl md:text-5xl text-rose-700">
          Auf was hättest du Lust?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <Activity text="Kino" icon="🍿" />
          <Activity text="Essen (gehen oder kochen)" icon="🍴" />
          <Activity text="Park & Picknick" icon="🌳" />
          <Activity text="Konzert (klein)" icon="🎸" />
        </div>
      </form>

      <div className="mt-12 flex gap-2 items-center justify-center">
        <ButtonPrimary
          text="Aktiviät bestätigen"
          type="submit"
          func={buttonFunc}
          disabled={disabled.value}
        />
      </div>
    </div>
  );
}
