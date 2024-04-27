import Button from "@/components/Button";
import ReviewItem from "../ReviewItem";
import { useReviews } from "../useReviews";
import Spinner from "@/components/Spinner";
import { IReview } from "@/interfaces";
import Empty from "@/components/Empty";
import ReviewHeading from "../ReviewHeading";
import { useCabin } from "@/features/cabins/useCabin";


export default function ReviewsList() {
  const { reviews, isLoading: isLoadingReview } = useReviews({})
  const { cabin, isLoading: isLoadingCabin } = useCabin()
  const reviewsLength = reviews?.length
  const { ratingAverage, ratingQuantity } = cabin || {}

  if (isLoadingReview || isLoadingCabin) return <Spinner size="normal" />

  return <>
    <ReviewHeading ratingAverage={ratingAverage} ratingQuantity={ratingQuantity} />
    <ul className="grid grid-cols-2 w-[70%] p-6 gap-x-12 gap-y-6">
      {reviews?.map((review: IReview) => <ReviewItem key={review._id} item={review} />)}

      {!reviewsLength && <Empty>This cabin doesn't have any review yet</Empty>}
      {reviewsLength > 4 &&
        <div className="w-[70%]">
          <Button type="secondary" size="small">Show all reviews</Button>
        </div>
      }
    </ul >
  </>
}