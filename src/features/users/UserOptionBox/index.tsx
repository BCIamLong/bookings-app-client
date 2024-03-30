import { HiBars3 } from "react-icons/hi2";

export default function UserOptionBox() {
  return (
    <div className="flex items-center gap-1 overflow-hidden rounded-3xl bg-white">
      <button className="px-2">
        <HiBars3 className="text-2xl text-stone-700 px-0.5" />
      </button>
      <div className="bg-stone-700">
        <a
          className="px-4 py-2 inline-block text-stone-50 font-medium text-lg"
          href="#"
        >
          Login
        </a>
      </div>
    </div>
  );
}
