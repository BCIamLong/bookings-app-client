import Button from "@/components/Button";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { useBookmark } from "../useBookmark";
import Spinner from "@/components/Spinner";
import { useAddBookmark } from "../useAddBookmark";
import { useDeleteBookmark } from "../useDeleteBookmark";
import { useUserSession } from "@/features/auth/useUserSession";
import { toast } from "react-toastify";

export default function Bookmark() {
  const { user, isLoading: isLoadingUser } = useUserSession()

  const { bookmark, isLoading } = useBookmark()
  const { addBookmark, isBookmarking } = useAddBookmark()
  const { deleteBookmark, isDeleting } = useDeleteBookmark()
  // console.log(bookmark)
  const { _id: bookmarkId } = bookmark || {}


  const handleAddBookmark = function () {
    if (!user) return toast.error('Please login to perform this action!')
    addBookmark()
  }

  const handleDeleteBookmark = function () {
    deleteBookmark(bookmarkId)
  }

  if (isLoadingUser) return <Spinner size="small" />

  return <>{!bookmark ? <Button type="icon" onClick={handleAddBookmark} disabled={isLoading || isBookmarking
  }>
    {isLoading || isBookmarking ? <Spinner size="small" /> :
      <HiOutlineHeart className="stroke-2 text-2xl" />
    }
  </Button > :
    <Button type="icon" disabled={isDeleting} onClick={handleDeleteBookmark}> {isDeleting ? <Spinner size="small" /> :
      <HiHeart className="stroke-2 text-2xl" />
    }</Button>}
  </>
}
