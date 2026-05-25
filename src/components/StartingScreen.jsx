import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

import { step } from "../app.jsx";

export default function StartingScreen() {
  return (
    <div className={`text-center ${step.value !== 0 ? "hidden" : "block"}`}>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHhiOWc3dXdkbmttZDM4dXNyZjRlZ3dvZWx1d3BkdjM1dGs1NWV0bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vVegyymxA90fkY8jkE/giphy.gif"
        alt="Katze klatscht mit Pfoten auf Tisch"
        loading="lazy"
        className="size-44 mx-auto block mb-4 rounded-xl object-cover"
      />
      <h2 className="text-center text-4xl md:text-5xl text-rose-700">
        Darf ich dich nochmal ausführen?
      </h2>

      <div className="mt-12 flex gap-2 items-center justify-center">
        <ButtonPrimary text="Yesss" />
        <ButtonSecondary text="Haha, nein" />
      </div>
    </div>
  );
}
