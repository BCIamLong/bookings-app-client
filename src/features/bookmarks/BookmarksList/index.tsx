import Pagination from "@/components/Pagination";
import { useBookmarks } from "../useBookmarks";
import Spinner from "@/components/Spinner";
import { IBookmark, ICabin } from "@/interfaces";
import CabinItem from "@/features/cabins/CabinItem";

export default function BookmarksList() {
  const { bookmarks, isLoading, count } = useBookmarks()

  if (isLoading) return <Spinner size="normal" />

  return <>
    <ul className="grid grid-cols-3 xl:gap-x-12 md:gap-x-8 xl:gap-y-18 xl:px-24 bg-stone-0 py-6 overflow-hidden md:gap-y-12 md:px-16 sm:max-md:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:px-12 sm:py-12 thin:max-sm:grid-cols-2 thin:gap-x-4 tiny:gap-x-6 tiny:px-6 thin:gap-y-16 tiny:gap-y-20 tiny:pb-16">
      {bookmarks?.map((bookmark: IBookmark) => (
        <CabinItem cabin={bookmark.cabin as ICabin} type="n-lines" key={bookmark._id} isLink={true} />
      ))}
    </ul>
    <Pagination count={count} />
  </>
}
