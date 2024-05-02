import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

interface ButtonLinkProps {
  type: string;
  href?: string;
  children: ReactNode;
  size?: "small" | "medium" | "big";
  isNavLink?: boolean
}

export default function ButtonLink({
  type,
  href,
  size,
  children,
  isNavLink = false,
}: ButtonLinkProps) {
  const baseStyle = `inline-block duration-300 transition-all flex items-center gap-2 justify-center `;
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

  if (type === 'secondary')
    style = baseStyle + `text-stone-700 text-lg font-semibold py-2 px-4 hover:bg-stone-200 rounded-lg border-2 capitalize border-stone-300`;

  if (type === 'profile')
    style = baseStyle + `text-stone-700 text-lg font-semibold py-2 px-4 capitalize hover:underline `;

  if (type === 'menu')
    style = baseStyle + `text-brand-700 text-sm font-semibold py-2 px-4 capitalize hover:bg-brand-300 `;

  return (
    <>
      {!isNavLink ? <Link to={href || "#"} className={style + sizeBtn}>
        {children}
      </Link> :
        <NavLink to={href || "#"} className={style + sizeBtn}>
          {children}
        </NavLink>}
    </>
  );
}
