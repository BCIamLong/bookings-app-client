import Button from "@/components/Button";
import ReviewItem from "../ReviewItem";
import { useReviews } from "../useReviews";
import Spinner from "@/components/Spinner";
import { IReview } from "@/interfaces";
import Empty from "@/components/Empty";


export default function ReviewsList({ isReviewsOfUser }: { isReviewsOfUser?: boolean }) {
  const { reviews, isLoading: isLoading } = useReviews({ isReviewsOfUser })
  const reviewsLength = reviews?.length
  let style = 'grid grid-cols-2 w-[70%] p-6 gap-x-12 gap-y-6'
  if (isReviewsOfUser) style = style + ' h-[27rem] overflow-y-hidden w-full'

  if (isLoading) return <Spinner size="normal" />

  return <>
    <ul className={style}>
      {reviews?.map((review: IReview, i: number) => {
        if (i === 4) return
        return isReviewsOfUser ? <div className="h-[7.5rem] [&>li]:h-full"><ReviewItem key={review._id} item={review} /></div> : <ReviewItem key={review._id} item={review} />
      })}
      {/* {reviews?.map((review: IReview) => <ReviewItem key={review._id} item={review} />)} */}

      {!reviewsLength && <Empty>This cabin doesn't have any review yet</Empty>}
      {reviewsLength > 4 &&
        <div className="w-[70%]">
          <Button type="secondary" size="small">Show all reviews</Button>
        </div>
      }
    </ul >
  </>
}