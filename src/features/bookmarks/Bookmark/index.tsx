import Button from "@/components/Button";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { useBookmark } from "../useBookmark";
import Spinner from "@/components/Spinner";
import { useAddBookmark } from "../useAddBookmark";
import { useDeleteBookmark } from "../useDeleteBookmark";

export default function Bookmark() {
  const { bookmark, isLoading } = useBookmark()
  const { addBookmark, isBookmarking } = useAddBookmark()
  const { deleteBookmark, isDeleting } = useDeleteBookmark()

  const { _id: bookmarkId } = bookmark || {}
  console.log(bookmark)

  const handleAddBookmark = function () {
    addBookmark()
  }

  const handleDeleteBookmark = function () {
    deleteBookmark(bookmarkId)
  }

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
