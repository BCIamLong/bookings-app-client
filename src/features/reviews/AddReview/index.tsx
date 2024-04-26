import Button from '@/components/Button'
import Textarea from '@/components/form/Textarea'
import { useState } from 'react'
import { HiStar } from 'react-icons/hi2'
import { toast } from 'react-toastify'

export default function AddReview() {
  const [star, setStar] = useState(0)
  const [review, setReview] = useState('')

  const handleClick = function () {
    if (!star || !review) return toast.error('Please fill the required fields to submit review')
  }
  return (
    <div className='p-6 flex flex-col gap-3 text-stone-700 relative'>
      <div className="flex gap-3 items-center">
        <img
          className="w-12 rounded-full"
          src="/default-avatar.jpg"
          alt="current user avatar"
        />
        <div className='flex gap-1'>
          {Array.from({ length: 5 }).map((_, i) => <Button type='icon' size='small' onClick={() => setStar(i + 1)} >
            <HiStar className='text-xl' />
          </Button>)}
        </div>
      </div>
      <Textarea id='review' type='review' value={review} onChange={(e) => setReview(e.target.value)} placeholder='Add your review'></Textarea>
      <div className='absolute bottom-[15%] right-[31.2%]'>
        <Button type='primary' size='small' onClick={handleClick}>Post</Button>
      </div>
    </div>
  )
}
