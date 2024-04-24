import { ReactNode } from "react";

export default function Empty({ children }: { children: ReactNode }) {
  return (
    <div className="text-stone-500">
      <p>{children}</p>
    </div>
  )
}
