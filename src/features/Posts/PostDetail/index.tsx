import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Popup from "@/components/Popup";
import { HiChevronRight, HiMiniEllipsisHorizontal, HiOutlineBookmark, HiOutlineChatBubbleOvalLeft, HiOutlineHeart, HiOutlineShare } from "react-icons/hi2";
import { LuSendHorizonal } from "react-icons/lu";

export default function PostDetail() {
  return (
    <div className="px-6 py-6 flex flex-col border-b-2 border-stone-50 shadow-sm overflow-scroll h-[100vh] no-scrollbar">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img className="w-12 rounded-full" src="/default-avatar.jpg" alt="" />
          <p className="text-stone-700 font-semibold">User name</p>
        </div>
        <div className=''>
          <Modal>
            <Modal.Open openName="disable-2fa">
              <Button type="icon-1" size="small">
                <HiMiniEllipsisHorizontal className="text-stone-600 text-2xl" />
              </Button>
            </Modal.Open>
            <Modal.Window name="disable-2fa">
              <Popup title='Choose an action' isLoading={false} btnContent="" onHandle={() => 1} >
                <ul className='flex flex-col gap-2'>
                  <li className='py-2 text-center text-stone-600 font-semibold border-y-[1.5px]'>Edit</li>
                  <li className='py-2 text-red-600 text-center text-stone-600 font-semibold border-y-[1.5px]'>Delete</li>
                  <li className='py-2  text-red-600 text-center text-stone-600 font-semibold border-y-[1.5px]'>Report</li>
                </ul>
              </Popup>
            </Modal.Window>
          </Modal>
        </div>
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
      <div className="flex items-center border-t-[1.5px] border-stone-100 py-2">
        <input className="w-full bg-stone-0 focus:outline-none" type="text" placeholder="Add a comment" />
        <div className="py-2 px-3 [&>.icon]:hover:text-brand-600 cursor-pointer">
          <LuSendHorizonal className="icon transition-all duration-300 text-xl text-stone-600" />
        </div>
      </div>
      <div className="border-t-[1.5px] border-stone-100">
        <ul>
          <li>
            <div className="flex flex-col gap-2 py-3 px-3">
              <div className="flex gap-3 items-center">
                <div className="flex gap-3 items-center">
                  <img className="w-8" src="/default-avatar.jpg" alt="" />
                  <p className="text-sm font-semibold text-stone-600">User Name</p>
                </div>
                <p className="text-xs text-stone-600 font-semibold">84w</p>
              </div>
              <p className="text-sm text-stone-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore ratione eaque placeat modi laboriosam hic ut itaque quisquam impedit tenetur, eum debitis, officia similique repudiandae, sit autem accusamus blanditiis.</p>
              <div className="flex gap-3 text-sm text-stone-600 font-semibold">
                <p>1 like</p>
                <p>Reply</p>
              </div>
              <div>
                <p className="flex gap-1 text-stone-500 text-sm font-semibold cursor-pointer">
                  <span className="mr-4">&mdash;&mdash;</span>
                  <span>View replies</span>
                  <span>(1)</span>
                </p>
                <ul className="hidden">
                  <li>
                    <div className="flex flex-col gap-2 py-3 px-3">
                      <div className="flex gap-3 items-center">
                        <div className="flex gap-3 items-center">
                          <img className="w-8" src="/default-avatar.jpg" alt="" />
                          <p className="text-sm font-semibold text-stone-600">User Name</p>
                        </div>
                        <p className="text-xs text-stone-600 font-semibold">84w</p>
                      </div>
                      <p className="text-sm text-stone-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore ratione eaque placeat modi laboriosam hic ut itaque quisquam impedit tenetur, eum debitis, officia similique repudiandae, sit autem accusamus blanditiis.</p>
                      <div className="flex gap-3 text-sm text-stone-600 font-semibold">
                        <p>1 like</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
