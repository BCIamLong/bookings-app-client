import { LuSendHorizonal } from "react-icons/lu";
import Input from "../form/Input";
export default function Contact() {
  return (
    <div className="flex items-center justify-center gap-12 bg-stone-300 px-3 py-6 text-stone-700">
      <div>
        <p className="text-xl font-semibold uppercase">NewsLetter</p>
        <p className="text-xs capitalize text-stone-500">Stay upto date</p>
      </div>
      <div className="relative flex w-[40%] shadow-lg shadow-stone-300">
        <Input
          type="text"
          placeholder="Your email"
          variant="contact"
          id="email"
        />
        <div className="absolute right-[-1%] top-[-8%] rounded-full bg-stone-400 p-2">
          <LuSendHorizonal className="text-2xl text-stone-50" />
        </div>
      </div>
    </div>
  );
}
