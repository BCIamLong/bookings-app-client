import { Link } from "react-router-dom";

import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import Empty from "@/components/Empty";
import Modal from "@/components/Modal";
import { ICabin, IReview } from "@/interfaces";
import ReviewItem from "../ReviewItem";
import { useReviews } from "../useReviews";
import ReviewProfilePopup from "../ReviewsProfilePopup";


export default function ReviewsList({ isReviewsOfUser }: { isReviewsOfUser?: boolean }) {


  const { reviews, isLoading: isLoading } = useReviews({ isReviewsOfUser })

  const reviewsLength = reviews?.length
  let style = 'grid grid-cols-2 w-[70%] p-6 gap-x-12 gap-y-6'
  if (isReviewsOfUser) style = style + ' h-[27rem] overflow-y-hidden w-full py-2'

  if (isLoading) return <Spinner size="normal" />

  return <>
    <ul className={style}>
      {reviews?.map((review: IReview, i: number) => {
        if (i === 4) return
        const { name, _id } = review.cabin as ICabin || {}
        return isReviewsOfUser ? <Link key={review._id} to={`/cabins/${_id}`} className="h-[7.5rem] [&>li]:h-full">
          <p className="p-2 bg-stone-100 text-xs uppercase font-semibold text-stone-500">{name} </p>
          <ReviewItem key={review._id} item={review} />
        </Link> :
          <ReviewItem key={review._id} item={review} />
      })}
      {/* {reviews?.map((review: IReview) => <ReviewItem key={review._id} item={review} />)} */}

      {!reviewsLength && <Empty>This cabin doesn't have any review yet</Empty>}
      {reviewsLength > 4 &&
        <Modal>
          <Modal.Open openName="user-reviews">
            <div className="w-[70%]">
              <Button type="secondary" size="small">Show all reviews</Button>
            </div>
          </Modal.Open>
          <Modal.Window name="user-reviews">
            <ReviewProfilePopup isReviewsOfUser={isReviewsOfUser} />
          </Modal.Window>
        </Modal>
      }
    </ul >
  </>
}