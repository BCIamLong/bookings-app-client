import { ReactNode } from "react";

interface ButtonLinkProps {
  type: string;
  href?: string;
  children: ReactNode;
}

export default function ButtonLink({ type, href, children }: ButtonLinkProps) {
  const baseStyle = `inline-block `;
  let style;

  if (type === "user-nav-header")
    style = baseStyle + `px-4 py-2 text-stone-50 font-medium text-lg`;

  if (type === "login")
    style =
      baseStyle +
      `bg-brand-600 text-brand-100 rounded-md p-2 font-semibold hover:bg-brand-700 flex gap-3 items-center justify-center`;

  if (type === "login-type")
    style =
      baseStyle +
      `flex gap-3 items-center justify-center px-3 py-2 text-sm bg-stone-200 rounded-full`;

  return (
    <a href={href || "#"} className={style}>
      {children}
    </a>
  );
}
