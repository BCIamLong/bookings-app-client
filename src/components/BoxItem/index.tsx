import { ReactNode } from "react";

export default function BoxItem({ children }: { children: ReactNode }) {
  return (
    <li><p className="p-2 text-stone-700 font-semibold hover:bg-stone-300 rounded-md cursor-pointer">
      {children}
    </p></li>
  )
}
