import Heading from "@/components/Heading";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

export default function ExplorePosts() {
  return (
    <>
      <input className="px-3 py-2 bg-stone-0 mb-6 rounded-full w-full outline-none border-brand-300 focus:border-brand-600 border-[1.5px] text-stone-600" placeholder="Search posts..." type="text" />
      <div>
        <ul className="flex gap-3">
          {/* this is for active tab
          <li className="py-1 px-3 bg-brand-400 border-[1.5px] border-brand-400 cursor-pointer rounded-full text-stone-0 text-sm font-semibold hover:bg-brand-500 transition-all duration-300">Popular</li> */}
          <li className="py-1 px-3 bg-stone-50 border-[1.5px] border-brand-400 cursor-pointer rounded-full text-stone-600 text-sm font-semibold hover:bg-stone-200 transition-all duration-300">Popular</li>
          <li className="py-1 px-3 bg-stone-50 border-[1.5px] border-brand-400 cursor-pointer rounded-full text-stone-600 text-sm font-semibold hover:bg-stone-200 transition-all duration-300">Trending</li>
          <li className="py-1 px-3 bg-stone-50 border-[1.5px] border-brand-400 cursor-pointer rounded-full text-stone-600 text-sm font-semibold hover:bg-stone-200 transition-all duration-300">Newest</li>
          <li className="py-1 px-3 bg-stone-50 border-[1.5px] border-brand-400 cursor-pointer rounded-full text-stone-600 text-sm font-semibold hover:bg-stone-200 transition-all duration-300">Most Likes</li>
        </ul>
        <div className="grid grid-cols-3 py-12 gap-3">
          <div className="relative cursor-pointer [&>div]:hover:visible [&>div]:hover:opacity-100 [&>img]:hover:brightness-75">
            <div className="z-20 invisible opacity-0 absolute flex bottom-0 left-0 w-full px-3 pb-2 items-center justify-between transition-all duration-300">
              <div className="flex gap-3 items-center">
                <img className="w-8 rounded-full" src="/default-avatar.jpg" alt="" />
                <p className="text-stone-50 text-sm font-semibold">User Name</p>
              </div>
              <div className="flex gap-1 items-center">
                <HiHeart className="text-xl text-red-500" />
                <p className="text-xs text-stone-0">12</p>
              </div>
            </div>
            <img className="z-10 rounded-xl" src="https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className="relative cursor-pointer [&>div]:hover:visible [&>div]:hover:opacity-100 [&>img]:hover:brightness-75">
            <div className="z-20 invisible opacity-0 absolute flex bottom-0 left-0 w-full px-3 pb-2 items-center justify-between transition-all duration-300">
              <div className="flex gap-3 items-center">
                <img className="w-8 rounded-full" src="/default-avatar.jpg" alt="" />
                <p className="text-stone-50 text-sm font-semibold">User Name</p>
              </div>
              <div className="flex gap-1 items-center">
                <HiHeart className="text-xl text-red-500" />
                <p className="text-xs text-stone-0">12</p>
              </div>
            </div>
            <img className="z-10 rounded-xl" src="https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className="relative cursor-pointer [&>div]:hover:visible [&>div]:hover:opacity-100 [&>img]:hover:brightness-75">
            <div className="z-20 invisible opacity-0 absolute flex bottom-0 left-0 w-full px-3 pb-2 items-center justify-between transition-all duration-300">
              <div className="flex gap-3 items-center">
                <img className="w-8 rounded-full" src="/default-avatar.jpg" alt="" />
                <p className="text-stone-50 text-sm font-semibold">User Name</p>
              </div>
              <div className="flex gap-1 items-center">
                <HiHeart className="text-xl text-red-500" />
                <p className="text-xs text-stone-0">12</p>
              </div>
            </div>
            <img className="z-10 rounded-xl" src="https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className="relative cursor-pointer [&>div]:hover:visible [&>div]:hover:opacity-100 [&>img]:hover:brightness-75">
            <div className="z-20 invisible opacity-0 absolute flex bottom-0 left-0 w-full px-3 pb-2 items-center justify-between transition-all duration-300">
              <div className="flex gap-3 items-center">
                <img className="w-8 rounded-full" src="/default-avatar.jpg" alt="" />
                <p className="text-stone-50 text-sm font-semibold">User Name</p>
              </div>
              <div className="flex gap-1 items-center">
                <HiHeart className="text-xl text-red-500" />
                <p className="text-xs text-stone-0">12</p>
              </div>
            </div>
            <img className="z-10 rounded-xl" src="https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>

        </div>
      </div >
    </>
  )
}
