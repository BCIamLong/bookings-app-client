import { ReactNode } from "react";

export default function Buttons({ children }: { children: ReactNode }) {
  return <div className="flex gap-3 justify-end">{children}</div>
}