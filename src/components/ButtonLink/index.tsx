import { ReactNode } from "react";

interface ButtonLinkProps {
  type: string;
  href?: string;
  children: ReactNode;
  size?: "small" | "medium" | "big";
}

export default function ButtonLink({
  type,
  href,
  size,
  children,
}: ButtonLinkProps) {
  const baseStyle = `inline-block duration-300 transition-all `;
  let style;
  let sizeBtn = "";
  if (size === "small") sizeBtn = " py-1 px-2 text-sm";
  if (size === "medium") sizeBtn = " py-2 px-4 text-lg";
  if (size === "big") sizeBtn = " py-3 px-6 text-xl";

  if (type === "user-nav-header")
    style = baseStyle + `px-4 py-2 text-stone-50 font-medium text-lg`;

  if (type === "primary")
    style =
      baseStyle +
      `bg-brand-600 text-brand-100 rounded-md p-2 font-semibold hover:bg-brand-700 flex gap-3 items-center justify-center`;

  if (type === "login")
    style =
      baseStyle +
      `bg-brand-600 text-brand-100 rounded-md p-2 font-semibold hover:bg-brand-700 flex gap-3 items-center justify-center`;

  if (type === "login-type")
    style =
      baseStyle +
      `flex gap-3 items-center justify-center px-3 py-2 text-sm bg-stone-200 rounded-full`;

  if (type === "simple")
    style = baseStyle + `flex justify-center text-sm text-brand-700`;

  return (
    <a href={href || "#"} className={style + sizeBtn}>
      {children}
    </a>
  );
}
