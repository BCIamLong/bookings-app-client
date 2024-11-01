import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Popup from "@/components/Popup";
import { HiBookmark, HiChevronRight, HiHeart, HiMiniEllipsisHorizontal, HiOutlineBookmark, HiOutlineChatBubbleOvalLeft, HiOutlineHeart, HiOutlineShare } from "react-icons/hi2";
import { LuSendHorizonal } from "react-icons/lu";
import { usePost } from "../usePost";
import Spinner from "@/components/Spinner";
import { useUserSession } from "@/features/auth/useUserSession";
import { useUpdatePost } from "../useUpdatePost";
import { Bookmark, Comment, IPostInput, IUser, Like } from "@/interfaces";
import { useState } from "react";
import { toast } from "react-toastify";
import { appConfig } from "@/config";
import { Link, useNavigate } from "react-router-dom";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInSeconds, format } from "date-fns";
import { dateUtil } from "@/utils";
import Heading from "@/components/Heading";
import ButtonLink from "@/components/ButtonLink";
import { useDeletePost } from "../useDeletePost";

const { CLIENT_BASE_UTL } = appConfig
const { getDifferentTime } = dateUtil


export default function PostDetail() {
  const navigate = useNavigate()
  const [comment, setComment] = useState('')
  // const [slide, setSlide] = useState(1)
  const { post, isLoading: isLoadingPost } = usePost()
  const { user, isLoading: isLoadingUser } = useUserSession()
  const { _id: currentUserId } = user || {}

  const { likes, bookmarks, shares, comments, title, description, images, tourId, userId, _id: postId, createdAt } = post || {}

  const { deletePost, isDeleting } = useDeletePost({ id: postId })
  const { updatePost, isUpdating } = useUpdatePost({ id: postId })

  const { fullName, _id: guestId, avatar } = userId as unknown as { _id: string, fullName: string, avatar: string } || {}
  const { name, id } = tourId as unknown as { id: string, name: string } || {}

  const numLikes = likes?.length
  const numComments = comments?.length
  const numBookmarks = bookmarks?.length
  const postAtDate = new Date(createdAt)
  const hours = -differenceInHours(postAtDate, new Date())
  const minutes = -differenceInMinutes(postAtDate, new Date())
  const seconds = -differenceInSeconds(postAtDate, new Date())
  const days = -differenceInDays(postAtDate, new Date())
  const months = -differenceInMonths(postAtDate, new Date())

  const postAtStr = (seconds === 0 && 'now') || (seconds > 60 && minutes <= 60 && `${minutes} minutes`) || (minutes > 60 && hours <= 24 && `${hours} hours`) || (hours > 24 && days <= 30 && `${days} days`) || (days > 30 && months <= 12 && `${months} months`) || months > 12 && format(postAtDate, 'MM/dd/yyyy')
  // console.log(postAtStr)

  const comments1 = comments?.filter((c: Comment) => {
    const { _id } = c.userId as unknown as { _id: string, name: string }

    return _id !== currentUserId
  })
  const curUserComment = comments?.find((c: Comment) => {
    const { _id } = c.userId as unknown as { _id: string, name: string }

    return _id === currentUserId
  })
  const finalComments = curUserComment ? [curUserComment, ...(comments1 || [])] : comments

  const isLiked = likes?.find((l: Like) => {
    const { _id } = l.userId as unknown as { _id: string, name: string }
    // console.log(_id, user._id)
    return _id === currentUserId
  })
  const isBookmarked = bookmarks?.find((b: Bookmark) => {
    const { _id } = b.userId as unknown as { _id: string, name: string }
    // console.log(_id, user._id)
    return _id === currentUserId
  })

  const isCommented = comments?.find((c: Bookmark) => {
    const { _id } = c.userId as unknown as { _id: string, name: string }
    // console.log(_id, user._id)
    return _id === currentUserId
  })



  const handleClickLike = function () {

    let newData: Like[] = []

    if (isLiked) newData = likes.filter((l: Like) => {
      const { _id } = l.userId as unknown as { _id: string, name: string }

      return _id !== currentUserId
    })

    if (!isLiked)
      newData = [...likes, { userId: currentUserId, likeAt: new Date() }]

    updatePost({ data: { likes: newData } })
  }

  const handleClickBookmark = function () {

    let newData: Bookmark[] = []

    if (isBookmarked) newData = bookmarks.filter((b: Bookmark) => {
      const { _id } = b.userId as unknown as { _id: string, name: string }

      return _id !== currentUserId
    })

    if (!isBookmarked)
      newData = [...bookmarks, { userId: currentUserId, bookmarkAt: new Date() }]

    // console.log('ok', newData)

    updatePost({ data: { bookmarks: newData } })
  }

  const handleClickComment = function () {
    // console.log('ok comment')
    if (!comment) return
    if (isCommented) {
      setComment('')
      return toast.warn('You already comment on this tour!')
    }

    let newData: Comment[] = []

    // if (isCommented) newData = comments.filter((c: Comment) => {
    //   const { _id } = c.userId as unknown as { _id: string, name: string }

    //   return _id !== currentUserId
    // })

    if (!isCommented)
      newData = [...comments, { userId: currentUserId, content: comment, likes: [], commentAt: new Date(), updateCommentAt: new Date() }]

    // console.log('ok', newData)

    updatePost({ data: { comments: newData } })
    setComment('')
  }

  const handleDeleteComment = function () {
    if (!user) return toast.error('Please login to perform this action!')
    const newData = comments.filter((c: Comment) => {
      const { _id } = c.userId as unknown as { _id: string, name: string }

      return _id !== currentUserId
    })

    updatePost({ data: { comments: newData } })
    navigate(0)
  }

  const copyToClipboard = function () {
    if (!user) return toast.error('Please login to perform this action!')
    // document.execCommand(`${CLIENT_BASE_UTL}/posts/${postId}`);
    navigator.clipboard.writeText(`${CLIENT_BASE_UTL}/posts/${postId}`)
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    // navigate(0)
    toast.success('Copied to clipboard')
    updatePost({ data: { shares: shares + 1 } })
  };
  const handleClickLikeComment = function (userId: string, commentId: string, likes: Like[], isCommentLiked: boolean) {
    if (!user) return toast.error('Please login to perform this action!')
    let newData
    if (isCommentLiked) newData = likes?.filter(l => l.userId !== userId)
    else newData = [...likes, { userId, likeAt: new Date() }]
    // console.log('ok ok ok')
    updatePost({ data: { likes: newData, commentId } as unknown as Partial<IPostInput>, basedComments: true })
  }

  const handleDeletePost = function () {
    const isWantToDelete = confirm('Are you sure to delete this post')
    if (!isWantToDelete) return
    deletePost()
  }

  const handleClickReport = function () {
    if (!user) return toast.error('Please login to perform this action!')
  }

  if (isLoadingPost || isLoadingUser) return <Spinner size="big" />

  return (
    <div className="px-6 py-6 flex flex-col border-b-2 border-stone-50 shadow-sm overflow-scroll h-[100vh] no-scrollbar">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img className="w-12 rounded-full" src={avatar} alt="" />
          <p className="text-stone-700 font-semibold">{fullName}</p>
          <p className="text-stone-500 text-sm">at {postAtStr} {postAtStr === 'now' ? '' : 'ago'}</p>
        </div>
        {/* 
        1, user doesn't login: display the report but when user click it will show please login
        2, user login but not the post of the user: display the report
        3, user login and also see the post of the user: display delete, update, report
        */}
        <div className={`${currentUserId !== guestId ? '' : ''}`}>
          <Modal>
            <Modal.Open openName="disable-2fa">
              <Button type="icon-1" size="small">
                <HiMiniEllipsisHorizontal className="text-stone-600 text-2xl" />
              </Button>
            </Modal.Open>
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
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-3 px-0">
        <Heading type='heading-4'>{title}</Heading>
        <p className="text-stone-600 text-sm">{description}</p>
      </div>
      <div className="mt-6 w-full">
        {/* <Button type="icon-2">-</Button> */}
        <div className={`flex w-full overflow-x-scroll ${!images.length || images.length === 1 ? 'no-scrollbar' : ''}`}>
          {images.map((image: string) => <img className="w-full" src={image} alt="" />)}
          {/* <img className="w-full" src={images[0]} alt="" /> */}
        </div>
        {/* <img className="w-full" src={images[0]} alt="" /> */}
      </div>
      <Link to={`/tours/${id}`}>
        <div className="flex justify-between items-center text-stone-50 px-3 py-1 bg-brand-400">
          <p className="">{name}</p>
          <HiChevronRight />
        </div>
      </Link>
      <ul className="flex justify-around py-4 text-xl text-stone-500">
        <li className="flex gap-2 items-center">
          <Button type='icon-2' onClick={handleClickLike}>
            {isLiked ? <HiHeart className="text-2xl" /> :
              <HiOutlineHeart className="text-2xl" />}
            <span className="text-sm font-semibold">{numLikes}</span>
          </Button>
        </li>
        <li className="flex gap-2 items-center">
          <HiOutlineChatBubbleOvalLeft className="text-2xl" />
          <span className="text-sm font-semibold">{numComments}</span>
        </li>
        <li className="flex gap-2 items-center">
          <Button type='icon-2' onClick={handleClickBookmark}>
            {isBookmarked ?
              <HiBookmark className="text-2xl" /> :
              <HiOutlineBookmark className="text-2xl" />}
            <span className="text-sm font-semibold">{numBookmarks}</span>
          </Button>
        </li>
        <li className="flex gap-2 items-center">
          <Button type='icon-2'>
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
      <div className={`flex items-center border-t-[1.5px] border-stone-100 py-2 ${isCommented ? '' : ''}`}>

        <input id="add-comment" value={comment} disabled={Boolean(!user)} onChange={(e) => setComment(e.target.value)} className="w-full bg-stone-0 focus:outline-none text-stone-700" type="text" placeholder={`${!user ? 'Please login to comment' : 'Add a comment'}`} />
        <Button type="icon-2" onClick={handleClickComment} disabled={Boolean(!user)}>
          <div className="py-2 px-3 [&>.icon]:hover:text-brand-600 cursor-pointer">
            <LuSendHorizonal className="icon transition-all duration-300 text-xl text-stone-600" />
          </div>
        </Button>
      </div>
      <div className="border-t-[1.5px] border-stone-100">
        <ul>
          {finalComments.map((com: Comment, ind: number) => {

            const { userId, likes, content, commentAt, _id: commentId } = com || {}
            const { fullName, avatar, _id: userIdStr } = userId as unknown as IUser || {}
            const avatarImg = avatar?.includes('default-avatar') ? '/default-avatar.jpg' : avatar
            const commentAtStr = getDifferentTime(new Date(commentAt), new Date())
            const isCommentLiked = likes?.find((l) => l.userId === userIdStr)
            console.log(Boolean(isCommentLiked))

            return <li key={ind}>
              <div className="flex flex-col gap-2 py-3 px-3">
                <div className="flex gap-3 items-center">
                  <div className="flex gap-3 items-center">
                    <img className="w-8 rounded-full" src={avatarImg} alt="" />
                    <p className="text-sm font-semibold text-stone-600">{fullName}</p>
                  </div>
                  <p className="text-xs text-stone-600 font-semibold">at {commentAtStr} {commentAtStr === 'now' ? '' : 'ago'}</p>
                </div>
                <p className="text-sm text-stone-700">{content}</p>
                <div className={`flex gap-3 text-sm text-stone-600 font-semibold items-center ${isCommentLiked ? '[&>p>button]:text-brand-600 [&>p]:text-brand-600' : ''}`}>
                  <p>{likes?.length} <Button type="" onClick={() => handleClickLikeComment(userIdStr, commentId, likes, Boolean(isCommentLiked))}>like</Button></p>
                  {/* <p>Reply</p> */}
                  {ind == 0 && <Modal>
                    <Modal.Open openName="comment-option">
                      <Button type="icon-1" size="small">
                        <HiMiniEllipsisHorizontal className="text-stone-600 text-2xl" />
                      </Button>
                    </Modal.Open>
                    <Modal.Window name="comment-option">
                      <Popup title='Choose an action' isLoading={false} btnContent="" onHandle={() => 1} >
                        <ul className='flex flex-col gap-2'>
                          {/* <li className='py-2 text-center text-stone-600 font-semibold border-y-[1.5px]'>Edit</li> */}
                          <li className=''>
                            <Button type="popup-delete" onClick={handleDeleteComment}>Delete</Button>
                          </li>
                        </ul>
                      </Popup>
                    </Modal.Window>
                  </Modal>}
                </div>
                {/* <div>
                <p className="flex gap-1 text-stone-500 text-sm font-semibold cursor-pointer">
                  <span className="mr-4">&mdash;&mdash;</span>
                  <span>View replies</span>
                  <span>(1)</span>
                </p>
                <ul className="hidden">
                  <li>
                    <div className="flex flex-col gap-2 py-3 px-3">
                      <div className="flex gap-3 items-center">
                        <div className="flex gap-3 items-center">
                          <img className="w-8" src="/default-avatar.jpg" alt="" />
                          <p className="text-sm font-semibold text-stone-600">User Name</p>
                        </div>
                        <p className="text-xs text-stone-600 font-semibold">84w</p>
                      </div>
                      <p className="text-sm text-stone-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore ratione eaque placeat modi laboriosam hic ut itaque quisquam impedit tenetur, eum debitis, officia similique repudiandae, sit autem accusamus blanditiis.</p>
                      <div className="flex gap-3 text-sm text-stone-600 font-semibold">
                        <p>1 like</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
              </div>
            </li>
          })}
        </ul>
      </div>
    </div >
  )
}
