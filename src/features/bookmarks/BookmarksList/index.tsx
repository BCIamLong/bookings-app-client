import Pagination from "@/components/Pagination";
import { useBookmarks } from "../useBookmarks";
import Spinner from "@/components/Spinner";
import { IBookmark, ICabin } from "@/interfaces";
import CabinItem from "@/features/cabins/CabinItem";

export default function BookmarksList() {
  const { bookmarks, isLoading, count } = useBookmarks()

  if (isLoading) return <Spinner size="normal" />

  return <>
    <ul className="grid grid-cols-3 gap-y-6 px-24 bg-stone-0 py-6 overflow-hidden h-screen">
      {bookmarks?.map((bookmark: IBookmark) => (
        <CabinItem cabin={bookmark.cabin as ICabin} type="n-lines" key={bookmark._id} isLink={true} />
      ))}
    </ul>
    <Pagination count={count} />
  </>
}
