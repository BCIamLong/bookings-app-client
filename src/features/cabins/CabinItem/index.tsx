import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi2";

import { ICabin } from "@/interfaces";
import Button from "@/components/Button";
import { useTranslation } from "react-i18next";

export default function CabinItem({
  cabin,
  type = "1-line",
  isLink = false,
}: {
  cabin: ICabin;
  type?: string;
  isLink?: boolean
}) {
  const { t } = useTranslation()
  const { image, _id } = cabin
  const cabinImage = image.startsWith('cabin-') ? `imgs/cabins/${image}` : image

  if (type === "n-lines")
    return (
      <li>
        <Link to={!isLink ? _id : `/cabins/${_id}`} className="block relative min-h-72  min-w-72 bg-inherit bg-cover text-stone-700 transition-all duration-1000 ease-in-out [&>.btn-item]:hover:inline-block [&>.item-img]:hover:brightness-50">
          <div className="btn-item absolute left-[33%] top-[33%] z-30 hidden h-60 w-72">
            <Button type="item">{t('cabin.btn')}</Button>
          </div>
          <div className="item-img min-h-60 min-w-72 overflow-hidden rounded-md">
            <img
              className="min-h-60 w-full"
              src={cabinImage}
              alt=""
            />
          </div>
          <div className="justify-en absolute right-2 top-2 flex">
            <HiOutlineHeart className="text-xl text-stone-200" />
          </div>
          <div className="absolute bottom-11 left-0 flex w-full justify-between px-3 pb-4 text-sm text-stone-200">
            <p className="font-semibold">
              {cabin.regularPrice}$ (-{cabin.discount}%)
            </p>
            <div className="flex items-center gap-1">
              <div className="rounded-full bg-stone-300 p-1"></div>
              <div className="rounded-full bg-stone-300 p-1"></div>
              <div className="rounded-full bg-stone-300 p-1"></div>
              <div className="rounded-full bg-stone-300 p-1"></div>
            </div>
          </div>
          <div className="absolute left-0 lg:top-9 xl:top-6 md:top-12 sm:top-16 flex h-full flex-col justify-end pb-4 thin:top-10 tiny:top-16">
            <p className="font-semibold ">{cabin.name}</p>
            <p className="text-xs leading-6 text-stone-500">
              {cabin.description}
            </p>
          </div>
        </Link>
      </li>
    );

  return (
    <li
      //   style={{
      //     backgroundImage: `url("/imgs/cabins/cabin-002.jpg")`,
      //     backdropFilter: ` grayscale(30%)`,
      //   }}
      className="relative min-h-48 min-w-30 overflow-hidden rounded-md bg-stone-400 bg-cover text-stone-100"
    >
      <img
        className="h-full w-full brightness-50"
        src={cabinImage}
        alt=""
      />
      <div className="justify-en absolute right-2 top-2 flex">
        <HiOutlineHeart className="text-xl" />
      </div>
      <div className="absolute left-0 top-0 flex h-full flex-col justify-end p-3 pb-4">
        <img
          className="mb-2 h-12 w-12 rounded-full shadow-2xl shadow-stone-100 ring-1 ring-stone-100"
          src="/imgs/cabins/cabin-002.jpg"
          alt=""
        />
        <p className="font-semibold">{cabin.name}</p>
        <p className="text-xs text-stone-300">{cabin.description}</p>
      </div>
    </li>
  );
}
