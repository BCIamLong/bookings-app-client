import { ReactNode } from "react"

export default function Box({ title, width, children }: { title?: string, width: string, children: ReactNode }) {
  return (
    <div className={`absolute p-3 top-12 right-0 w-${width} bg-stone-50 rounded-md hidden flex-col gap-3`}>
      <h2 className="text-xl text-stone-800 font-semibold">{title}</h2>
      <ul className="p-3 flex gap-3 flex-col">
        {children}
      </ul>
    </div>
  )
}
