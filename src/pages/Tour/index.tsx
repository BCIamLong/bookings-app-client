import ReviewsList from "@/features/reviews/ReviewsList";
import CabinDetail from "../../features/cabins/CabinDetail";
import AddReview from "@/features/reviews/AddReview";
import ReviewHeading from "@/features/reviews/ReviewHeading";

export default function Tour() {
  return (
    <>

      <div className="bg-stone-0">
        <CabinDetail />
        <div className="px-6 pt-8 py-20">
          <AddReview />
          <ReviewHeading />
          <ReviewsList />
        </div>
      </div>
    </>
    // <div className="px-6 pt-8 py-20 bg-stone-0">
    //   <CabinDetail />
    //   <AddReview />
    //   <ReviewHeading />
    //   <ReviewsList />
    // </div>
  )
}
