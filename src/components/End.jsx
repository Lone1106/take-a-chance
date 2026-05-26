import emailjs from "@emailjs/browser";

import { step, answerData } from "../app.jsx";

import ButtonPrimary from "./ButtonPrimary";

export default function End() {
  const date = new Date(answerData.value.date);
  const formattedDate = date.toLocaleDateString("de-DE");

  const sendMail = () => {
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        date: formattedDate,
        time: answerData.value.time,
        activity: answerData.value.activity,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
  };

  return (
    <div className={`${step.value !== 4 ? "hidden" : "block"}`}>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXpoZXRvYXd3c2NyZjN6YTEzMmZ6eHZianF1YWgxdjFjYXMyZ252aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LsdO5RziEq4Zu5XVVn/giphy.gif"
        alt="Pengu happy confetti"
        loading="lazy"
        className="size-32 mx-auto block mb-8 rounded-xl object-cover"
      />
      <div>
        <h2 className="text-center text-4xl md:text-5xl text-rose-700">
          It's a Date!
        </h2>

        <ul className="border border-white/25 bg-black rounded-xl text-sm mt-8">
          <li className="p-4 pb-0!">
            <span className="font-normal block opacity-70 mb-1 uppercase">
              Datum
            </span>
            <span className="block border-b border-b-white/25 pb-4">
              {formattedDate}, {answerData.value.time} Uhr
            </span>
          </li>
          <li className="p-4 ">
            <span className="font-normal block opacity-70 mb-1 uppercase">
              Aktivität
            </span>
            {answerData.value.activity}
          </li>
        </ul>
        <div className="mt-8 flex justify-center items-center">
          <ButtonPrimary text="Date absenden" func={sendMail} />
        </div>
      </div>
    </div>
  );
}
