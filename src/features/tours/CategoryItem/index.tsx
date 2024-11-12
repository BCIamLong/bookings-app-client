import { appConfig } from "@/config";
import { Link } from "react-router-dom";

const { DIFFICULTY, CLIENT_BASE_UTL } = appConfig

export default function CategoryItem({ title, numTours, image }: { title: string, numTours: number, image: string }) {
  let link = `${CLIENT_BASE_UTL}/tours?type=${title}`
  if (DIFFICULTY.flat().includes(title)) link = `${CLIENT_BASE_UTL}/tours?difficulty=${title}`
  return (
    <Link to={link}>
      <li className="bg-stone-50 rounded-md hover:shadow-md transition-all duration-300 shadow-sm">
        <div className="flex flex-col gap-3 cursor-pointer mb-3">
          <img className="w-52 h-40 object-cover rounded-md rounded-b-none" src={image} alt="" />
          <div className="pb-1 px-1">
            <p className="font-semibold text-stone-700 capitalize">{title}</p>
            {/* <p className="text-sm text-stone-500">{numTours} tours</p> */}
          </div>
        </div>
      </li>
    </Link>
  )
}