import { useState } from 'react'
import { toast } from 'react-toastify'
import { HiStar } from 'react-icons/hi2'

import { useAddReview } from '../useAddReview'
import Button from '@/components/Button'
import Textarea from '@/components/form/Textarea'
import Spinner from '@/components/Spinner'
import { useUserSession } from '@/features/auth/useUserSession'
import { useReviews } from '../useReviews'
import Modal from '@/components/Modal'
import Buttons from '@/components/Buttons'
import { useDeleteReview } from '../useDeleteReview'
import { useEditReview } from '../useEditReview'
import { useUserBookings } from '@/features/bookings/useUserBookings'
import { useTranslation } from 'react-i18next'
// import ReviewItem from '../ReviewItem'

export default function AddReview() {
  const { t } = useTranslation()
  const { deleteReview, isDeleting } = useDeleteReview()
  const { editReview, isEditing } = useEditReview()
  const { user, isLoading: isLoadingUser } = useUserSession()
  const { reviews, isLoading: isLoadingReview } = useReviews({ userId: user?._id })
  const { _id: reviewId } = reviews?.[0] || {}
  const { addReview, isAdding } = useAddReview()
  const [star, setStar] = useState(0)
  const [review, setReview] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const { count, isLoading: isLoadingBookings } = useUserBookings()

  const { avatar } = user || {}
  const avatarFormat = avatar === 'default-avatar.jpg' ? '/default-avatar.jpg' : avatar

  const handleClick = function () {
    if (!star || !review) return toast.error('Please fill the required fields to submit review')
    addReview({ rating: star, review }, {
      onSuccess: () => {
        setStar(0)
        setReview('')
      }
    })
  }

  const handleDeleteClick = function () {
    deleteReview(reviewId)
  }

  const handleEditClick = function () {
    editReview({ id: reviewId, data: { rating: star, review } }, {
      onSuccess: () => {
        setIsEdit(false)
      }
    })
  }

  if (isLoadingUser || isLoadingReview || isLoadingBookings) return <Spinner size='normal' />

  if (!count) return null
  // <p>You need to purchase this cabin to review</p>

  if (reviews?.length) return <div id='your-review'> <Modal>
    <Modal.Open openName='your-review'>
      <div className='px-6 mt-6 inline-block'>
        <Button type='secondary' size='small'>See your review</Button>
      </div>
    </Modal.Open>
    <Modal.Window name='your-review'>
      <div className='w-[30rem] p-6 pt-16 bg-stone-50 flex flex-col justify-center'>
        <div className='p-6 flex flex-col gap-3 text-stone-700 relative w-[36rem]'>
          <div className="flex gap-3 items-center">
            <img
              className="w-12 rounded-full"
              src={avatarFormat}
              alt="current user avatar"
            />
            {!isEdit ?
              <p className='flex gap-1 items-center font-semibold text-lg'>
                <span>{reviews[0]?.rating}</span>
                <HiStar className='text-xl' />
              </p> :
              <div className='flex gap-1'>
                {Array.from({ length: 5 }).map((_, i) => <Button type='icon' key={i} size='small' onClick={() => setStar(i + 1)} >
                  <HiStar className='text-xl' />
                </Button>)}
              </div>}
          </div>
          <Textarea id='review' type='review' defaultValue={reviews[0]?.review} onChange={(e) => setReview(e.target.value)} placeholder='Add your review' disabled={!isEdit}></Textarea>
          {/* <div className='absolute bottom-[15%] right-[31.2%]'>
            <Button type='primary' size='small'>
              Update
            </Button>
          </div> */}
        </div>
        {!isEdit ?
          <Buttons>
            <Button type='primary' size='small' onClick={() => setIsEdit(true)} disabled={isDeleting}>{t('form.btn.edit')}</Button>
            <Button type='primary' size='small' onClick={handleDeleteClick} disabled={isDeleting}>{isDeleting ? <Spinner size='small' /> : `${t('form.btn.delete')}`}</Button>
          </Buttons>
          :
          <Buttons>
            <Button type='primary' size='small' onClick={handleEditClick}>
              {isEditing ? <Spinner size='small' /> : `${t('form.btn.edit')}`}
            </Button>
            <Button type='primary' size='small' onClick={() => setIsEdit(false)}>{t('form.btn.cancel')}</Button>
          </Buttons>}
      </div>
    </Modal.Window>
  </Modal>
  </div>

  return (
    <div className='p-6 flex flex-col gap-3 text-stone-700 relative'>
      <div className="flex gap-3 items-center">
        <img
          className="w-12 rounded-full"
          src={avatarFormat}
          alt="current user avatar"
        />
        <div className='flex gap-1'>
          {Array.from({ length: 5 }).map((_, i) => <Button type='icon' key={i} size='small' onClick={() => setStar(i + 1)} >
            <HiStar className='text-xl' />
          </Button>)}
        </div>
      </div>
      <Textarea id='review' type='review' value={review} onChange={(e) => setReview(e.target.value)} placeholder={t('cabin.reviews.add.holder')} disabled={isAdding}></Textarea>
      <div className='absolute bottom-[15%] right-[31.2%]'>
        <Button type='primary' size='small' onClick={handleClick}>
          {isAdding ? <Spinner size='small' /> : `${t('cabin.reviews.add.btn')}`}
        </Button>
      </div>
    </div>
  )
}
