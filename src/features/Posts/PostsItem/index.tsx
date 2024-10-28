import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Modal from '@/components/Modal'
import Popup from '@/components/Popup'
import { Bookmark, IPost, Like } from '@/interfaces'
import { HiBookmark, HiChevronRight, HiHeart, HiMiniEllipsisHorizontal, HiOutlineBookmark, HiOutlineChatBubbleOvalLeft, HiOutlineHeart, HiOutlineShare } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { useUpdatePost } from '../useUpdatePost'
import { useUserSession } from '@/features/auth/useUserSession'

export default function PostsItem({ post }: { post: IPost }) {
  const { likes, bookmarks, shares, comments, title, description, images, tourId, userId, _id: postId } = post || {}
  const { user: { _id: currentUserId }, isLoading } = useUserSession()

  const numLikes = likes.length
  const numComments = comments.length
  const numBookmarks = bookmarks.length

  const isLiked = likes?.find(l => {
    const { _id } = l.userId as unknown as { _id: string, name: string }
    // console.log(_id, user._id)
    return _id === currentUserId
  })
  const isBookmarked = bookmarks?.find(b => {
    const { _id } = b.userId as unknown as { _id: string, name: string }
    // console.log(_id, user._id)
    return _id === currentUserId
  })

  const { name, id } = tourId as unknown as { id: string, name: string }
  const { fullName, id: guestId, avatar } = userId as unknown as { id: string, fullName: string, avatar: string }

  const { updatePost, isUpdating } = useUpdatePost({ id: postId })

  const handleClickLike = function () {

    let newData: Like[] = []

    if (isLiked) newData = likes.filter(l => {
      const { _id } = l.userId as unknown as { _id: string, name: string }

      return _id !== currentUserId
    })

    if (!isLiked)
      newData = [...likes, { userId: currentUserId, likeAt: new Date() }]

    updatePost({ likes: newData })
  }

  const handleClickBookmark = function () {

    let newData: Bookmark[] = []

    if (isBookmarked) newData = bookmarks.filter(b => {
      const { _id } = b.userId as unknown as { _id: string, name: string }

      return _id !== currentUserId
    })

    if (!isBookmarked)
      newData = [...bookmarks, { userId: currentUserId, bookmarkAt: new Date() }]

    // console.log('ok', newData)

    updatePost({ bookmarks: newData })
  }
  return (
    <div className="px-6 py-6 flex flex-col border-b-2 border-stone-50 shadow-sm">
      <div className="flex justify-between items-center px-16">
        {/* <Link to={`/users/`}> */}
        <div className="flex gap-3 items-center">
          <img className="w-12 rounded-full" src={avatar} alt="" />
          <p className="text-stone-700 font-semibold">{fullName}</p>
        </div>
        {/* </Link> */}
        <div className=''>
          <Modal>
            <Modal.Open openName="disable-2fa">
              <Button type="icon-1" size="small">
                <HiMiniEllipsisHorizontal className="text-stone-600 text-2xl" />
              </Button>
            </Modal.Open>
            <Modal.Window name="disable-2fa">
              <Popup title='Choose an action' isLoading={false} btnContent="" onHandle={() => 1} >
                <ul className='flex flex-col gap-2'>
                  <li className='py-2 text-center text-stone-600 font-semibold border-y-[1.5px]'>Edit</li>
                  <li className='py-2 text-red-600 text-center text-stone-600 font-semibold border-y-[1.5px]'>Delete</li>
                  <li className='py-2  text-red-600 text-center text-stone-600 font-semibold border-y-[1.5px]'>Report</li>
                </ul>
              </Popup>
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-3 px-16">
        <Heading type='heading-4'>{title}</Heading>
        <p className="text-stone-600 text-sm">{description}</p>
      </div>
      <div className="mt-6 px-16 relative">
        <img className="w-full" src="https://images.pexels.com/photos/386000/pexels-photo-386000.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <Link to={`/tours/${id}`} className='absolute left-1/2 bottom-0 -translate-x-1/2 w-full px-16'>
          <div className="flex justify-between items-center text-stone-50 px-3 py-1 bg-brand-400">
            <p className="">{name}</p>
            <HiChevronRight />
          </div>
        </Link>
      </div>
      <ul className={`flex justify-around py-4 text-xl text-stone-500 ${isUpdating ? 'pointer-events-none blur-[0.5px]' : ''}`}>
        <li className="flex gap-2 items-center">
          <Button type='icon-2' onClick={handleClickLike}>
            {isLiked ? <HiHeart className="text-2xl" /> :
              <HiOutlineHeart className="text-2xl" />}
            <span className="text-sm font-semibold">{numLikes}</span>
          </Button>
        </li>
        <li className="flex gap-2 items-center">
          <Button type='icon-2'>
            <HiOutlineChatBubbleOvalLeft className="text-2xl" />
            <span className="text-sm font-semibold">{numComments}</span></Button>
        </li>
        <li className="flex gap-2 items-center">  <Button type='icon-2'>
          <Button type='icon-2' onClick={handleClickBookmark}>
            {isBookmarked ?
              <HiBookmark className="text-2xl" /> :
              <HiOutlineBookmark className="text-2xl" />}
            <span className="text-sm font-semibold">{numBookmarks}</span></Button>
        </Button>
        </li>
        <li className="flex gap-2 items-center">  <Button type='icon-2'>
          <HiOutlineShare className="text-2xl" />
          <span className="text-sm font-semibold">{shares}</span></Button>
        </li>
      </ul>
    </div>
  )
}
