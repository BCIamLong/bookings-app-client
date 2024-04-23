import { HiOutlineCheckCircle } from "react-icons/hi2";

import Heading from "../../../components/Heading"
import BookingCard from "../BookingCard";
import Buttons from "../../../components/Buttons";
import Button from "../../../components/Button";

export default function BookingSuccess() {
  return <div className="py-12 px-6 bg-brand-100 flex flex-col items-center">
    <div className="flex justify-center items-center gap-2 mb-6">
      <Heading type="secondary">
        <span className="text-brand-600">Payment successfully</span>
        <span><HiOutlineCheckCircle className="text-5xl stroke-[1.5px] text-brand-600" /></span>
      </Heading>
    </div>
    <div className="flex flex-col items-center justify-center w-[40%]">
      <BookingCard />
    </div>
    <div className="w-[70%] p-6 flex justify-center mt-3 text-sm text-brand-600 items-center">
      <p>Would you like to receive a notification to remind you when it's time to check in? If you'd like, we can send you a reminder on you start date to ensure you don't miss the beginning of your stay.</p>
      <Buttons>
        <Button type="primary" size="small">Yes</Button>
        <Button type="secondary" size="small">No</Button>
      </Buttons>
    </div>
  </div>
}