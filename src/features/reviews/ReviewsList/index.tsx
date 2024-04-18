import { HiStar } from "react-icons/hi2";
import Heading from "../../../components/Heading";

export default function ReviewsList() {
  return <div className="flex flex-col gap-4 text-stone-700">
    <Heading type="tertiary">
      <span><HiStar className="text-xl" /></span>
      <p className="flex gap-1">
        <span>0</span>
        <span>Reviews</span>
      </p>
    </Heading>
    <div className="border-b-2 w-full border-stone-100"></div>
    <p className="underline capitalize">Reviewed by you</p>
  </div>
}