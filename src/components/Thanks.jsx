import { step } from "../app";

export default function Thanks() {
  return (
    <div className={`text-center ${step.value !== 5 ? "hidden" : "block"}`}>
      <h2 className="text-rose-700 text-4xl">Thank you!</h2>
      <p className="opacity-70 mt-4">
        Deine Anfrage wird nun bearbeitet. <br /> Ich bitte um etwas Geduld.
      </p>
    </div>
  );
}
