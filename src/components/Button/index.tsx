import { ReactNode } from "react";

interface ButtonProps {
  type: string;
  children: ReactNode;
}

export default function Button({ type, children }: ButtonProps) {
  const baseStyle = `duration-300 transition-all `;
  let style;
  if (type === "footer")
    style =
      baseStyle +
      `px-4 py-2 text-stone-600 text-xs font-semibold bg-stone-200 rounded-sm flex items-center gap-2`;
  if (type === "nav-search")
    style =
      baseStyle +
      `transition-all duration-100 ease-in-out hover:border-b-2 hover:border-stone-300`;
  if (type === "search")
    style =
      baseStyle +
      `flex items-center justify-center rounded-full border-none bg-stone-700`;
  if (type === "nav-header")
    style =
      baseStyle +
      `bg-stone-700 text-stone-50 px-6  text-lg rounded-3xl py-2 flex items-center`;
  if (type === "login")
    style =
      baseStyle +
      `bg-brand-600 text-brand-100 rounded-md p-2 font-semibold hover:bg-brand-700 flex gap-3 items-center justify-center`;

  return <button className={style}>{children}</button>;
}
