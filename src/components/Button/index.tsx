import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  type: string;
  children: ReactNode;
  disabled?: boolean,
  size?: "small" | "medium" | "big";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
  reset?: boolean
}

export default function Button({ type, children, onClick, disabled, size, reset }: ButtonProps) {
  const baseStyle = `flex items-center gap-2 duration-300 transition-all justify-center `;

  let style;
  let sizeBtn = "";
  if (size === "small") sizeBtn = " py-1 px-2 text-sm";
  if (size === "medium") sizeBtn = " py-2 px-4 text-lg";
  if (size === "big") sizeBtn = " py-3 px-6 text-xl";
  if (type === "footer")
    style =
      baseStyle +
      `px-4 py-2 text-stone-600 text-xs font-semibold bg-stone-200 rounded-sm flex items-center gap-2`;
  if (type === "nav-search")
    style =
      baseStyle +
      `transition-all duration-[120ms] ease-in-out hover:border-b-2 hover:border-stone-300`;
  if (type === "search")
    style =
      baseStyle +
      `flex items-center justify-center rounded-full border-none bg-stone-700`;
  if (type === "nav-header")
    style =
      baseStyle +
      `bg-stone-700 text-stone-50 px-6  text-lg rounded-3xl py-2 flex items-center tiny:max-sm:hidden`;
  if (type === "login")
    style =
      baseStyle +
      `bg-brand-600 text-brand-100 rounded-md p-2 font-semibold hover:bg-brand-700 flex gap-3 items-center justify-center`;
  if (type === "item")
    style =
      baseStyle +
      `text-stone-700 font-semibold uppercase text-xs px-2 py-3 bg-stone-300 rounded-md p-2`;

  if (type === "discover-light")
    style =
      baseStyle +
      `text-stone-700 font-semibold text-sm pr-3 py-1 border-b-2 border-white hover:border-b-2 hover:border-stone-700`;

  if (type === "discover")
    style =
      baseStyle +
      `text-stone-100 font-bold capitalize text-sm px-2 py-3 bg-stone-800 rounded-full w-[30%] sm:w-[40%] hover:bg-stone-700 thin:w-[60%] tiny:w-[40%]`;

  if (type === 'icon-1')
    style = baseStyle + `text-stone-700 text-xl p-[0.84rem] hover:bg-stone-200`;

  if (type === 'icon')
    style = baseStyle + `text-stone-700 text-xl p-2 hover:bg-stone-200`;

  if (type === 'primary')
    style = baseStyle + `text-stone-100 text-lg font-semibold py-2 px-4 hover:bg-stone-600 bg-stone-700 rounded-lg border-2 capitalize border-stone-700`;

  if (type === 'secondary')
    style = baseStyle + `text-stone-700 text-lg font-semibold py-2 px-4 hover:bg-stone-200 rounded-lg border-2 capitalize border-stone-300`;

  if (type === 'brand')
    style = baseStyle + `text-stone-100 text-lg font-semibold py-2 px-4 hover:bg-brand-700 bg-brand-600 rounded-lg capitalize`;

  if (type === 'menu-1')
    style = 'flex items-center gap-2 duration-300 transition-all justify-start hover:bg-stone-300 rounded-md cursor-pointer w-full text-sm font-semibold'

  if (reset) return <button disabled={disabled} type="reset" onClick={onClick} className={style + sizeBtn}>{children}</button>;

  return <button disabled={disabled} onClick={onClick} className={style + sizeBtn}>{children}</button>;
}
