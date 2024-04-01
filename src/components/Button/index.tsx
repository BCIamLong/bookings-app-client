import { ReactNode } from "react";

interface ButtonProps {
  type: string;
  children: ReactNode;
}

export default function Button({ type, children }: ButtonProps) {
  const baseStyle = ``;
  let style;
  if (type === "footer")
    style =
      baseStyle +
      `px-4 py-2 text-stone-600 text-xs font-semibold bg-stone-200 rounded-sm flex items-center gap-2`;
  return <button className={style}>{children}</button>;
}
