import Heading from "@/components/Heading";
import { useState } from "react";
import { HiHeart, HiMagnifyingGlass, HiMagnifyingGlassCircle, HiOutlineHeart } from "react-icons/hi2";
import { usePosts } from "../usePosts";
import Spinner from "@/components/Spinner";
import Button from "@/components/Button";
import Empty from "@/components/Empty";
import { IPost, IUser } from "@/interfaces";
import { Link, useSearchParams } from "react-router-dom";
import { SortOptions } from "@/interfaces/types";
import { useSearchPosts } from "../useSearchPosts";
import ButtonLink from "@/components/ButtonLink";

export default function ExplorePosts() {
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = searchParams.get('sort') || 'none'
  const { posts, isLoading } = usePosts({ sort: sort as SortOptions, })
  const [filteredId, setFilteredId] = useState('')

  const { isLoading: isLoadingRecommendedPosts, posts: recommendedPosts } = useSearchPosts({ searchStr: search })
  console.log(recommendedPosts)
  const handleClickSearch = function () {
    // setSearchParams(params => {
    //   params.set('search', dateStr)
    //   return params
    // })
  }

  // if (isLoading) return <Spinner size="big" />

  // if (!posts?.length) return <Empty>No posts found</Empty>

  return (
    <>
      <div className="relative flex items-center">
        <input className="px-3 py-2 bg-stone-0 mb-6 rounded-full w-full outline-none border-brand-300 focus:border-brand-600 border-[1.5px] text-stone-600" placeholder="Search posts..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

        {isLoadingRecommendedPosts && <ul className='absolute top-12 bg-stone-100 w-[99%] text-stone-600 rounded-lg py-2 px-3 flex flex-col gap-1'><Spinner size='small' /></ul>}
        {recommendedPosts?.length ?
          <ul className='absolute z-40 top-12 bg-stone-100 w-[99%] text-stone-600 rounded-lg py-2 px-3 flex flex-col gap-1'>
            {recommendedPosts?.map((post: IPost) =>
              <Link to={`/posts/${post._id}`}>
                <li className='flex gap-2 items-center border-b-[1.5px]'>
                  <img src={post?.images?.[0]} className='w-16' alt="" />
                  <p>{post.title}</p>
                </li>
              </Link>)
            }
          </ul>
          :
          search?.length > 3 && !isLoadingRecommendedPosts ? <ul className='absolute top-12 bg-stone-100 w-[99%] text-stone-600 rounded-lg py-2 px-3 flex flex-col gap-1'>
            <p>No posts found!</p>
          </ul> : null
        }
        {/* <Button type="icon-search" onClick={handleClickSearch}><HiMagnifyingGlass /></Button> */}
      </div>
      <div>
        <ul className="flex gap-3">
          {/* this is for active tab
          <li className="py-1 px-3 bg-brand-400 border-[1.5px] border-brand-400 cursor-pointer rounded-full text-stone-0 text-sm font-semibold hover:bg-brand-500 transition-all duration-300">Popular</li> */}
          <li className={`py-1 px-3 border-[1.5px] border-brand-400 cursor-pointer rounded-full text-stone-600 text-sm font-semibold hover:bg-stone-200 transition-all duration-300 ${filteredId === '1' ? 'bg-brand-200 [&>button]:text-brand-600 hover:bg-brand-300 pointer-events-none' : ''}`}>
            <Button type="" onClick={() => {
              setFilteredId('1')
              setSearchParams(params => {
                params.set('sort', 'popular')
                return params
              })
            }}>Popular</Button>
          </li>
          <li className={`py-1 px-3 border-[1.5px] border-brand-400 cursor-pointer rounded-full text-stone-600 text-sm font-semibold hover:bg-stone-200 transition-all duration-300 ${filteredId === '2' ? 'bg-brand-300 [&>button]:text-brand-600 hover:bg-brand-300 pointer-events-none' : ''}`}>
            <Button type="" onClick={() => {
              setFilteredId('2')
              setSearchParams(params => {
                params.set('sort', 'trending')
                return params
              })
            }}>Trending</Button>
          </li>
          <li className={`py-1 px-3 border-[1.5px] border-brand-400 cursor-pointer rounded-full text-stone-600 text-sm font-semibold hover:bg-stone-200 transition-all duration-300 ${filteredId === '3' ? 'bg-brand-300 [&>button]:text-brand-600 hover:bg-brand-300 pointer-events-none' : ''}`}>
            <Button type="" onClick={() => {
              setFilteredId('3')
              setSearchParams(params => {
                params.set('sort', 'latest')
                return params
              })
            }}>Newest</Button></li>
          <li className={`py-1 px-3 border-[1.5px] border-brand-400 cursor-pointer rounded-full text-stone-600 text-sm font-semibold hover:bg-stone-200 transition-all duration-300 ${filteredId === '4' ? 'bg-brand-300 [&>button]:text-brand-600 hover:bg-brand-300 pointer-events-none' : ''}`}>
            <Button type="" onClick={() => {
              setFilteredId('4')
              setSearchParams(params => {
                params.set('sort', 'most-likes')
                return params
              })
            }}>Most Likes</Button></li>
        </ul>
        <div className="grid grid-cols-3 py-12 gap-3">
          {(isLoading) && <div className="flex justify-center w-full col-span-3"><Spinner size="big" /></div>}
          {(!posts?.length) && <div className="flex justify-center w-full col-span-3"><Empty>No posts found</Empty></div>}
          {posts?.map((p: IPost) => {
            const { images, userId, _id: postId, likes } = p || {}
            const { fullName, avatar } = userId as unknown as IUser || {}
            const avatarUser = avatar?.includes('default') ? `/${avatar}` : avatar

            return <Link to={`/posts/${postId}`}><div className="relative cursor-pointer [&>div]:hover:visible [&>div]:hover:opacity-100 [&>img]:hover:brightness-75 h-full">
              <div className="z-20 invisible opacity-0 absolute flex bottom-0 left-0 w-full px-3 pb-2 items-center justify-between transition-all duration-300">
                <div className="flex gap-3 items-center">
                  <img className="w-8 rounded-full" src={avatarUser} alt="" />
                  <p className="text-brand-100 text-sm font-semibold">{fullName}</p>
                </div>
                <div className="flex gap-1 items-center">
                  <HiHeart className="text-xl text-red-500" />
                  <p className="text-xs text-stone-0">{likes?.length}</p>
                </div>
              </div>
              <img className="z-10 rounded-xl h-full object-cover" src={images?.[0]} alt="" />
            </div></Link>
          }
          )}
        </div>
      </div >
    </>
  )
}
