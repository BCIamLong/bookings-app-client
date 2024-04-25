import Button from "@/components/Button";
import ReviewItem from "../ReviewItem";


export default function ReviewsList() {
  return <ul className="grid grid-cols-2 w-[70%] p-6 gap-x-12 gap-y-6">
    <ReviewItem />
    <ReviewItem />
    <ReviewItem />
    <ReviewItem />
    <div className="w-[70%]">
      <Button type="secondary" size="small">Show all reviews</Button>
    </div>
  </ul>
}