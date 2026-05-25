export default function Activity({ icon, text }) {
  return (
    <label className="text-center">
      <input
        type="radio"
        name="activity"
        value={text}
        required
        className="peer sr-only"
      />
      <div className="flex items-center justify-center h-full rounded-2xl p-4 md:p-8 bg-rose-200 text-rose-700 hover:text-rose-200 hover:bg-rose-700 focus-within:text-rose-200 focus-within:bg-rose-700 peer-checked:text-rose-200! peer-checked:bg-rose-700! transition cursor-pointer">
        <div>
          <span className="text-4xl block mb-2">{icon}</span>
          {text}
        </div>
      </div>
    </label>
  );
}
