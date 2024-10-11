import ReviewsList from "@/features/reviews/ReviewsList";
import AddReview from "@/features/reviews/AddReview";
import ReviewHeading from "@/features/reviews/ReviewHeading";
import TourDetail from "@/features/tours/TourDetail";

export default function Tour() {
  return (
    <>

      <div className="bg-stone-0">
        <TourDetail />
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
