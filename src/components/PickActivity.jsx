import { useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";

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
        className="size-32 mx-auto block mb-8 rounded-xl object-cover"
      />
      <form onChange={checkValid} ref={formRef}>
        <h2 className="text-center text-4xl text-rose-700">
          Auf was hättest du Lust?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:max-w-3/4 md:mx-auto">
          <Activity
            text="Kino"
            icon="🍿"
            info="falls gerade was cooles läuft"
          />
          <Activity text="Essen" icon="🍴" info="gehen oder kochen?" />
          <Activity
            text="Park & Picknick"
            icon="🌳"
            info="ich bring Zeugs mit"
          />
          <Activity text="Konzert" icon="🎸" info="Klein, z.B. im Backstage" />
        </div>
      </form>

      <div className="mt-12 flex gap-2 items-center justify-center">
        <ButtonPrimary
          text="Aktiviät bestätigen"
          func={buttonFunc}
          disabled={disabled.value}
        />
      </div>
    </div>
  );
}
