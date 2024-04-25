import { HiStar } from "react-icons/hi2";

export default function ReviewHeading() {
  return (
    <div className="flex gap-2 font-semibold text-xl text-stone-700 p-6 mt-1">
      <p className="flex items-center gap-1">
        Reviews <span><HiStar /></span> 4.8
      </p>
      <span>&middot;</span>
      <p>100 ratings</p>
    </div>
  )
}
