import { useDarkModeContext } from "@/context/DarkModeContext";
import PostsSidebar from "@/features/Posts/PostsSidebar";
import { Outlet } from "react-router-dom";

export default function PostsLayout() {
  const { isDarkMode } = useDarkModeContext()!
  const bgStyle = isDarkMode ? 'bg-brand-600' : 'bg-brand-300'
  return <>
    <div className="relative bg-stone-0">
      <div className={`brightness-[100%] z-10 h-[6rem] ${bgStyle} w-full`}></div>
    </div>
    <div className="p-12 grid grid-cols-[1fr_3fr] bg-stone-0 tiny:max-sm:px-8 gap-x-6 sm:max-md:px-12 thin:max-tiny:grid-cols-1 thin:max-tiny:gap-y-6 thin:max-tiny:px-6 tiny:max-sm:grid-cols-[1fr_2fr] sm:max-lg:grid-cols-[1fr_2.5fr]">
      {/* * this is place for sidebar */}
      <PostsSidebar />
      <div className="px-24 thin:max-sm:px-16">
        <Outlet />
      </div>
    </div >
  </>
}
