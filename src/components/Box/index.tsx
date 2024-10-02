import { ReactNode } from "react"

export default function Box({ title, width, children }: { title?: string, width: string, children: ReactNode }) {
  return (
    // * if we use hidden maybe we don't have the way to impact and create the animation because hidden will remove the element totally and when we make it appear it will be added and maybe we don't have the way to impact to that process yet to create animation
    // * therefore we can use the trick that use opacity and invisible to make the element disappear but we still can impact to it and create the animation
    <div className={`absolute p-3 top-12 right-0 w-${width} transition-all opacity-0 ease-in-out duration-300 bg-stone-50 rounded-md invisible flex flex-col gap-3`}>
      <h2 className="text-xl text-stone-800 font-semibold">{title}</h2>
      <ul className="p-3 flex gap-3 flex-col">
        {children}
      </ul>
    </div>
  )
}
