import PostsSidebar from "@/features/Posts/PostsSidebar";
import { Outlet } from "react-router-dom";

export default function PostsLayout() {
  return <>
    <div className="relative bg-stone-0">
      <div className="brightness-[90%] z-10 h-[6rem] bg-brand-500 w-full"></div>
    </div>
    <div className="p-12 grid grid-cols-[1fr_3fr] bg-stone-0 tiny:max-sm:px-8 gap-x-6 sm:max-md:px-12 thin:max-tiny:grid-cols-1 thin:max-tiny:gap-y-6 thin:max-tiny:px-6 tiny:max-sm:grid-cols-[1fr_2fr] sm:max-lg:grid-cols-[1fr_2.5fr]">
      {/* * this is place for sidebar */}
      <PostsSidebar />
      <div className="px-24">
        <Outlet />
      </div>
    </div >
  </>
}
