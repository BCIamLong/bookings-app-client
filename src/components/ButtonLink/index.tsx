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

  return (
    <a href={href || "#"} className={style}>
      {children}
    </a>
  );
}
