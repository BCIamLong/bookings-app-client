
export default function CategoryItem({ title, numTours }: { title: string, numTours: number }) {
  return (
    <li className="bg-stone-50 rounded-md hover:shadow-md transition-all duration-300 shadow-sm">
      <div className="flex flex-col gap-3 cursor-pointer mb-3">
        <img className="w-52 rounded-md rounded-b-none" src="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div>
          <p className="font-semibold text-stone-700">{title}</p>
          <p className="text-sm text-stone-500">{numTours} tours</p>
        </div>
      </div>
    </li>
  )
}