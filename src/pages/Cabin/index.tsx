import ReviewsList from "@/features/reviews/ReviewsList";
import CabinDetail from "../../features/cabins/CabinDetail";
import AddReview from "@/features/reviews/AddReview";

export default function Cabin() {
  return (
    <div className="px-6 pt-8 py-20">
      <CabinDetail />
      <AddReview />
      <ReviewsList />
    </div>
  )
}
