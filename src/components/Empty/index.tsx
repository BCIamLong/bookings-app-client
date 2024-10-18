import { ReactNode } from "react";

export default function Empty({ children }: { children: ReactNode }) {
  return (
    <div className="text-stone-500 text-lg font-semibold px-6 py-2">
      <p>{children}</p>
    </div>
  )
}
