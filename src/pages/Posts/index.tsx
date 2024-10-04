import Button from "@/components/Button";
import Buttons from "@/components/Buttons";
import FileInput from "@/components/form/FileInput";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import Heading from "@/components/Heading";
import { HiOutlineHeart, HiOutlineChatBubbleOvalLeft, HiOutlineShare, HiMiniEllipsisHorizontal, HiOutlineBookmark, HiChevronRight, HiOutlineHome } from "react-icons/hi2";
import { LuImagePlus, LuImage } from "react-icons/lu";

export default function Posts() {
  return <>
    <div className="relative bg-stone-0">
      <div className="brightness-[90%] z-10 h-[6rem] bg-brand-500 w-full"></div>
    </div>
    <div className="p-12 grid grid-cols-[1fr_3fr] bg-stone-0 tiny:max-sm:px-8 gap-x-6 sm:max-md:px-12 thin:max-tiny:grid-cols-1 thin:max-tiny:gap-y-6 thin:max-tiny:px-6 tiny:max-sm:grid-cols-[1fr_2fr] sm:max-lg:grid-cols-[1fr_2.5fr]">
      {/* * this is place for sidebar */}
      <div className="h-screen">
        <ul className="bg-stone-0 flex flex-col gap-3 h-full border-r-2 border-stone-50 shadow-sm overflow-hidden">
          <li >
            <div className="[&>.icon]:hover:text-brand-600 transition-all duration-300 hover:bg-stone-50 items-center gap-3 cursor-pointer flex px-6 py-3 capitalize bg-stone-0 text-stone-600 font-semibold text-lg">
              <span className="icon text-2xl transition-all duration-300">
                <HiOutlineHome />
              </span>
              <span>
                Home
              </span>
            </div>
          </li>
          <li >
            <div className="[&>.icon]:hover:text-brand-600 transition-all duration-300 hover:bg-stone-50 items-center gap-3 cursor-pointer flex px-6 py-3 capitalize bg-stone-0 text-stone-600 font-semibold text-lg">
              <span className="icon text-2xl transition-all duration-300">
                <HiOutlineHome />
              </span>
              <span>
                Create post
              </span>
            </div>
          </li>

        </ul>
      </div>
      <div className="px-24">
        <div className="flex gap-6 flex-col pb-12">
          <Heading type="secondary">
            <LuImagePlus />
            <span>Create post</span>
          </Heading>
          <div className="[&>textarea]:w-full flex gap-3 flex-col">
            <Heading type="heading-4">Content</Heading>
            <Textarea type="posts" id="" />
          </div>
          <div className="flex gap-3 flex-col">
            <Heading type="heading-4">Add photos</Heading>
            <div className="[&>input]:w-[30%] gap-3 border-[1.5px] border-stone-300 py-12 flex-col rounded-lg flex justify-center items-center">
              <div className="flex">
                <LuImage className="text-6xl text-stone-500  -rotate-6" />
                <LuImage className="text-6xl text-stone-500 rotate-[20deg] -mt-3" />
              </div>
              <p className="text-lg text-stone-600 font-semibold">Drag photo here</p>
              <p className="text-sm text-stone-400">SVG, PNG, JPG</p>
              <FileInput id="" variant="posts" />
            </div>
          </div>
          <Buttons>
            <Button type="secondary">Cancel</Button>
            <Button type="brand">Create Post</Button>
          </Buttons>
        </div>
        <input className="px-3 py-2 rounded-full w-full outline-none border-brand-300 focus:border-brand-600 border-[1.5px] text-stone-600" placeholder="Search posts..." type="text" />
        <div className="overflow-scroll no-scrollbar h-[90vh]">
          <div className="px-6 py-6 flex flex-col border-b-2 border-stone-50 shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img className="w-12" src="default-avatar.jpg" alt="" />
                <p className="text-stone-700 font-semibold">User name</p>
              </div>
              <HiMiniEllipsisHorizontal className="text-stone-600" />
            </div>
            <div className="mt-2">
              <p className="text-stone-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui temporibus dicta itaque, numquam tempore minima aperiam corporis, aliquid autem explicabo recusandae excepturi odio labore hic nulla, tenetur accusamus saepe.</p>
            </div>
            <div className="mt-6">
              <img className="w-full" src="https://images.pexels.com/photos/386000/pexels-photo-386000.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="flex justify-between items-center text-stone-50 px-3 py-1 bg-brand-400">
              <p className="">Tour name</p>
              <HiChevronRight />
            </div>
            <ul className="flex justify-around py-4 text-xl text-stone-500">
              <li className="flex gap-2 items-center">
                <HiOutlineHeart className="text-2xl" />
                <span className="text-sm font-semibold">12</span>
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineChatBubbleOvalLeft className="text-2xl" />
                <span className="text-sm font-semibold">12</span>
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineBookmark className="text-2xl" />
                <span className="text-sm font-semibold">12</span>
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineShare className="text-2xl" />
                <span className="text-sm font-semibold">12</span>
              </li>
            </ul>
          </div>
          <div className="px-6 py-6 flex flex-col border-b-2 border-stone-50 shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img className="w-12" src="default-avatar.jpg" alt="" />
                <p className="text-stone-700 font-semibold">User name</p>
              </div>
              <HiMiniEllipsisHorizontal className="text-stone-600" />
            </div>
            <div className="mt-2">
              <p className="text-stone-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi qui temporibus dicta itaque, numquam tempore minima aperiam corporis, aliquid autem explicabo recusandae excepturi odio labore hic nulla, tenetur accusamus saepe.</p>
            </div>
            <div className="mt-6">
              <img className="w-full" src="https://images.pexels.com/photos/386000/pexels-photo-386000.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="flex justify-between items-center text-stone-50 px-3 py-1 bg-brand-400">
              <p className="">Tour name</p>
              <HiChevronRight />
            </div>
            <ul className="flex justify-around py-4 text-xl text-stone-500">
              <li className="flex gap-2 items-center">
                <HiOutlineHeart className="text-2xl" />
                <span className="text-sm font-semibold">12</span>
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineChatBubbleOvalLeft className="text-2xl" />
                <span className="text-sm font-semibold">12</span>
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineBookmark className="text-2xl" />
                <span className="text-sm font-semibold">12</span>
              </li>
              <li className="flex gap-2 items-center">
                <HiOutlineShare className="text-2xl" />
                <span className="text-sm font-semibold">12</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  </>
}
