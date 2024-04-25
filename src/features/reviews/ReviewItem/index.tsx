import { HiStar } from "react-icons/hi2";

export default function ReviewItem() {
  return (
    <li className="flex flex-col gap-3 border-b-[1px] pb-6 border-stone-300 h-48 overflow-y-hidden">
      <div className="flex gap-4 text-stone-700">
        <img className="rounded-full w-12" src="/default-avatar.jpg" alt="user avatar" />
        <div>
          <p className="font-semibold text-sm">John Doberman</p>
          <p className="text-xs text-stone-500">Mar 12 2020</p>
        </div>
        <div className="flex items-center gap-1 ml-auto mr-3">
          <p>4</p>
          <HiStar className="text-xl text-stone-600" /></div>
      </div>
      <p className="text-sm leading-5 text-stone-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos cupiditate nam, neque doloribus illum adipisci officiis veritatis obcaecati maxime suscipit itaque. Expedita dicta soluta corrupti quia reprehenderit recusandae totam a.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi asperiores dolorem eius illum et obcaecati architecto! Iure aut ut accusantium voluptas deleniti, inventore maxime mollitia magnam eveniet temporibus voluptates eligendi.</p>
    </li>
  )
}
