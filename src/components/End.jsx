import { step, answerData } from "../app.jsx";

export default function End() {
  return (
    <div className={`text-center ${step.value !== 4 ? "hidden" : "block"}`}>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWI4YW8yem5zM2hvM2p6ZWs3dGJwYmI2bWQzOWhnNnRxOGtraXBkMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vOfvpTX1imciKVZfai/giphy.gif"
        alt="Wednesday you are dismissed"
        loading="lazy"
        className="size-44 mx-auto block mb-8 rounded-xl object-cover"
      />
      <div>
        <h2 className="text-center text-4xl md:text-5xl text-rose-700">
          Deine Anfrage wird nur verarbeitet.
        </h2>
        <p className="text-center md:max-w-lg md:mx-auto opacity-50 mt-8">
          Die Bearbeitug deiner Anfrage kann zwischen 14 und 21 Werktage in
          Anspruch nehmen. Ich bitte um Geduld.
        </p>
      </div>
    </div>
  );
}
