import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Modal from '@/components/Modal'
import Popup from '@/components/Popup'
import { Bookmark, IPost, Like } from '@/interfaces'
import { HiBookmark, HiChevronRight, HiHeart, HiMiniEllipsisHorizontal, HiOutlineBookmark, HiOutlineChatBubbleOvalLeft, HiOutlineHeart, HiOutlineShare } from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom'
import { useUpdatePost } from '../useUpdatePost'
import { useUserSession } from '@/features/auth/useUserSession'
import Spinner from '@/components/Spinner'
// import { useRef } from 'react'
import { appConfig } from '@/config'
import { toast } from 'react-toastify'
import { dateUtil } from '@/utils'
import { useDeletePost } from '../useDeletePost'
import ButtonLink from '@/components/ButtonLink'


const { CLIENT_BASE_UTL } = appConfig
const { getDifferentTime } = dateUtil


export default function PostsItem({ post }: { post: IPost }) {
  const navigate = useNavigate()
  const { likes, bookmarks, shares, comments, title, description, images, userId, tourId, _id: postId, createdAt } = post || {}
  // const { likes, bookmarks, shares, comments, title, description, images, tours, users, _id: postId, createdAt } = post || {}
  // const userId = users?.[0] || {}
  // const tourId = tours?.[0] || {}
  const { deletePost, isDeleting } = useDeletePost({ id: postId })
  // console.log(images)
  const { user, isLoading } = useUserSession()
  const { _id: currentUserId } = user || {}
  const numLikes = likes.length
  const numComments = comments.length
  const numBookmarks = bookmarks.length

  const isLiked = likes?.find(l => {
    const { _id } = l.userId as unknown as { _id: string, name: string } || {}
    // console.log(_id, user._id)
    return _id === currentUserId
  })
  const isBookmarked = bookmarks?.find(b => {
    const { _id } = b.userId as unknown as { _id: string, name: string } || {}
    // console.log(_id, user._id)
    return _id === currentUserId
  })

  const { name, id } = tourId as unknown as { id: string, name: string } || {}
  const { fullName, _id: guestId, avatar } = userId as unknown as { _id: string, fullName: string, avatar: string }
  const avatarStr = avatar?.includes('default') ? `/${avatar}` : avatar

  const { updatePost, isUpdating } = useUpdatePost({ id: postId })
  const postAtStr = getDifferentTime(new Date(createdAt), new Date())
  // console.log(currentUserId, guestId, currentUserId !== guestId)
  const handleClickLike = function () {

    let newData: Like[] = []

    if (isLiked) newData = likes.filter(l => {
      const { _id } = l.userId as unknown as { _id: string, name: string }

      return _id !== currentUserId
    })

    if (!isLiked)
      newData = [...likes, { userId: currentUserId, likeAt: new Date() }]

    // const data = !newData.length ? [] : newData

    // const formData = new FormData()
    // formData.append('likes', JSON.stringify(data))

    updatePost({ data: { likes: newData } })
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

    updatePost({ data: { bookmarks: newData } })
  }

  const handleDeletePost = function () {
    const isWantToDelete = confirm('Are you sure to delete this post')
    if (!isWantToDelete) return
    deletePost()
  }


  const copyToClipboard = function () {
    if (!user) return toast.error('Please login to perform this action!')
    // document.execCommand(`${CLIENT_BASE_UTL}/posts/${postId}`);
    navigator.clipboard.writeText(`${CLIENT_BASE_UTL}/posts/${postId}`)
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    // navigate(`/posts/${postId}`)
    // toast.success('Copied to clipboard')
    updatePost({ data: { shares: shares + 1 } }, {
      onSuccess: () => toast.success('Copied to clipboard')
    })
  };

  const handleClickReport = function () {
    if (!user) return toast.error('Please login to perform this action!')
  }

  if (isLoading) return <Spinner size='big' />

  return (
    <div className="px-6 py-6 flex flex-col border-b-2 border-stone-50 shadow-sm relative">
      <Modal>
        <Link to={`/posts/${postId}`} className='z-10'>
          <div className="flex justify-between items-center px-16">
            {/* <Link to={`/users/`}> */}
            <div className="flex gap-3 items-center">
              <img className="w-12 rounded-full" src={avatarStr} alt="" />
              <p className="text-stone-700 font-semibold">{fullName}</p>
              <p className="text-stone-500 text-sm">at {postAtStr} {postAtStr === 'now' ? '' : 'ago'}</p>
            </div>
            {/* </Link> */}
            <div className={`z-30 ${currentUserId !== guestId ? '' : ''}`}>
              <Modal.Open openName="disable-2fa">
                <Button type="icon-1" size="small">
                  <HiMiniEllipsisHorizontal className="text-stone-600 text-2xl" />
                </Button>
              </Modal.Open>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-3 px-16">
            <Heading type='heading-4'>{title}</Heading>
            <p className="text-stone-600 text-sm">{description}</p>
          </div>
          <div className="mt-6 px-16 relative">
            <div className='no-scrollbar'>
              {/* {images.map((image, ind) => <img key={ind} className="w-full" src={image} alt="" />)} */}
              <img className="w-full" src={images[0]} alt="" />
              {/* <img className="w-full" src="https://images.pexels.com/photos/386000/pexels-photo-386000.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
            </div>
            <Link to={`/tours/${id}`} className='absolute left-1/2 bottom-0 -translate-x-1/2 w-full px-16'>
              <div className="flex justify-between items-center text-stone-50 px-3 py-1 bg-brand-400">
                <p className="">{name}</p>
                <HiChevronRight />
              </div>
            </Link>
          </div>
        </Link>
        <Modal.Window name="disable-2fa">
          <Popup title='Choose an action' isLoading={false} btnContent="" onHandle={() => 1} >
            <ul className='flex flex-col gap-2'>
              {currentUserId === guestId && <>
                <li>
                  <ButtonLink href={`/posts/${postId}/edit`} type='popup-normal'>
                    Edit
                  </ButtonLink>
                </li>
                <li className=''>
                  <Button type='popup-delete' onClick={handleDeletePost}>
                    {isDeleting ? <Spinner size='small' /> :
                      'Delete'}
                  </Button>
                </li></>}
              {currentUserId !== guestId &&
                <li className='py-2  text-red-600 text-center text-stone-600 font-semibold border-y-[1.5px]'>   <Button type='popup-normal' onClick={handleClickReport}>
                  Report
                </Button></li>}
            </ul>
          </Popup>
        </Modal.Window>
      </Modal>
      <ul className={`flex justify-around py-4 text-xl text-stone-500 ${isUpdating ? 'pointer-events-none blur-[0.5px]' : ''}`}>
        <li className="flex gap-2 items-center">
          <Button type='icon-2' onClick={handleClickLike}>
            {isLiked ? <HiHeart className="text-2xl" /> :
              <HiOutlineHeart className="text-2xl" />}
            <span className="text-sm font-semibold">{numLikes}</span>
          </Button>
        </li>
        <li className="flex gap-2 items-center">
          <Button type='icon-2' onClick={() => navigate(`/posts/${postId}`)} >
            <HiOutlineChatBubbleOvalLeft className="text-2xl" />
            <span className="text-sm font-semibold">{numComments}</span>
          </Button>
        </li>
        <li className="flex gap-2 items-center">
          <Button type='icon-2' onClick={handleClickBookmark}>
            {isBookmarked ?
              <HiBookmark className="text-2xl" /> :
              <HiOutlineBookmark className="text-2xl" />}
            <span className="text-sm font-semibold">{numBookmarks}</span>
          </Button>
        </li>
        <li className="flex gap-2 items-center">  <Button type='icon-2'>
          <Modal>
            <Modal.Open openName="disable-2fa">
              <Button type="icon-3" size="small">
                <HiOutlineShare className="text-2xl" />
                <span className="text-sm font-semibold">{shares}</span>
              </Button>
            </Modal.Open>
            <Modal.Window name="disable-2fa">
              <Popup title='Choose an action' isLoading={false} btnContent="" onHandle={() => 1} >
                <ul className='flex flex-col gap-2'>
                  <li>
                    <Button type='popup-normal' onClick={copyToClipboard}>
                      Copy link
                    </Button>
                  </li>
                </ul>
              </Popup>
            </Modal.Window>
          </Modal>
        </Button>
        </li>
      </ul>
    </div >

  )
}
