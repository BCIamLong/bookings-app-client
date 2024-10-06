import { HiOutlineHome, HiMagnifyingGlass, HiMiniSquaresPlus, HiOutlineBookmark } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'

export default function PostsSidebar() {
  return (
    <div className="h-screen thin:max-tiny:h-auto">
      <ul className="[&>li>.active]:text-brand-600 [&>li>.active]:bg-stone-50 bg-stone-0 flex flex-col gap-3 h-full border-r-2 border-stone-50 shadow-sm overflow-hidden thin:max-tiny:flex-row">
        <li >
          <NavLink to=''>
            <div className="[&>.icon]:hover:text-brand-600 transition-all duration-300 hover:bg-stone-50 items-center gap-3 cursor-pointer flex px-6 py-3 capitalize bg-stone-0 text-stone-600 font-semibold text-lg">
              <span className="icon text-2xl transition-all duration-300">
                <HiOutlineHome />
              </span>
              <span>
                Posts
              </span>
            </div>
          </NavLink>
        </li>
        <li >
          <NavLink to='create'>
            <div className="[&>.icon]:hover:text-brand-600 transition-all duration-300 hover:bg-stone-50 items-center gap-3 cursor-pointer flex px-6 py-3 capitalize bg-stone-0 text-stone-600 font-semibold text-lg">
              <span className="icon text-2xl transition-all duration-300">
                <HiMiniSquaresPlus />
              </span>
              <span>
                Create post
              </span>
            </div>
          </NavLink>
        </li>
        <li >
          <NavLink to='explore'>
            <div className="[&>.icon]:hover:text-brand-600 transition-all duration-300 hover:bg-stone-50 items-center gap-3 cursor-pointer flex px-6 py-3 capitalize bg-stone-0 text-stone-600 font-semibold text-lg">
              <span className="icon text-2xl transition-all duration-300">
                <HiMagnifyingGlass />
              </span>
              <span>
                Explore
              </span>
            </div>
          </NavLink>
        </li>
        <li >
          <NavLink to='saved'>
            <div className="[&>.icon]:hover:text-brand-600 transition-all duration-300 hover:bg-stone-50 items-center gap-3 cursor-pointer flex px-6 py-3 capitalize bg-stone-0 text-stone-600 font-semibold text-lg">
              <span className="icon text-2xl transition-all duration-300">
                <HiOutlineBookmark />
              </span>
              <span>
                Saved
              </span>
            </div>
          </NavLink>
        </li>

      </ul>
    </div>
  )
}
