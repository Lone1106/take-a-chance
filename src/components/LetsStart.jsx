import ButtonPrimary from "./ButtonPrimary";

import { step } from "../app.jsx";

export default function LetsStart() {
  return (
    <div className={`${step.value !== 1 ? "hidden" : "block"}`}>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MW5xY2QwdmlvOXUyc2Yxbmtwc3h2ZXRtbTFlaHZvMnVkcjRpMXdzZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/aB8acJ0dByuGY/giphy.gif"
        alt="Suprised Squidward"
        loading="lazy"
        className="size-44 mx-auto block mb-8 rounded-xl object-cover"
      />
      <div>
        <h2 className="text-center text-4xl md:text-5xl text-rose-700">
          Ok, das ist jetzt irgendwie unerwartet.
        </h2>
        <p className="text-center md:max-w-lg md:mx-auto opacity-50 mt-8">
          Eigentlich bin ich es nicht gewohnt so weit zu kommen. Aber ich war ja
          auch schon überrascht als du beim ersten mal akzeptiert hattest.
        </p>
      </div>

      <div className="mt-12 flex gap-2 items-center justify-center">
        <ButtonPrimary text="Dann mal weiter" />
      </div>
    </div>
  );
}
