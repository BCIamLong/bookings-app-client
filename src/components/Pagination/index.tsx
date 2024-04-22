import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import { appConfig } from "../../config";
import { useSearchParams } from "react-router-dom";

const { PAGE_LIMIT } = appConfig

export default function Pagination({ count }: { count: number }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const numPages = Math.ceil(count / PAGE_LIMIT)
  const currentPage = searchParams.get('page') || 1
  const classStyle = `transition-all duration-300 rounded-md w-8 h-8 cursor-pointer flex justify-center items-center border-[1px] border-stone-300 hover:bg-stone-200 font-semibold text-sm`


  const handleClickNext = function () {
    const nextPage = +currentPage + 1
    if (nextPage > numPages) return
    searchParams.set('page', String(nextPage))
    setSearchParams(searchParams)
  }

  const handleClickPrevious = function () {
    const previousPage = +currentPage - 1
    if (previousPage <= 0) return
    searchParams.set('page', String(previousPage))
    setSearchParams(searchParams)
  }

  const handleClick = function (page: number) {
    searchParams.set('page', String(page))
    setSearchParams(searchParams)
  }

  return (
    <div className="flex gap-2 justify-center [&>.active]:border-stone-700 [&>.active]:bg-stone-700 [&>.active]:text-stone-100 [&>.active]:hover:bg-stone-600 z-50">
      <div className={classStyle} onClick={handleClickPrevious}><HiChevronLeft /></div>
      {Array.from({ length: numPages }).map((_, i) => {
        if (i + 1 === +currentPage) return <div key={i} onClick={() => handleClick(i + 1)} className={classStyle + ' active'}>{i + 1}</div>
        return <div key={i} onClick={() => handleClick(i + 1)} className={classStyle}>{i + 1}</div>
      })}

      {/* <div className={classStyle}>...</div> */}
      <div className={classStyle} onClick={handleClickNext}><HiChevronRight /></div>
    </div>
  )
}
