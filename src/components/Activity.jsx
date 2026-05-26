export default function Activity({ icon, text, info }) {
  return (
    <label>
      <input
        type="radio"
        name="activity"
        value={info ? `${text}, ${info}` : text}
        required
        className="peer sr-only"
      />
      <div className="h-full rounded-xl p-4 transition cursor-pointer border border-white/25 bg-black peer-hover:bg-black-900 peer-focus-within:bg-black-900 peer-checked:bg-rose-700! flex flex-col justify-center">
        <div className="flex items-center justify-start gap-2">
          <span>{icon}</span>
          <span className="inline-flex flex-wrap items-center justify-start gap-1 md:gap-px">
            {text}
            {info && <span className="text-[10px] opacity-50">({info})</span>}
          </span>
        </div>
      </div>
    </label>
  );
}
