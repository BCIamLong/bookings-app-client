import { ReactNode } from "react";

export default function Heading({
  type,
  children,
}: {
  type: "primary" | "secondary" | "tertiary";
  children: ReactNode;
}) {
  const baseStyle = `font-bold text-stone-700 flex items-center gap-2 `;
  let style;
  if (type === "primary") style = baseStyle + `text-3xl`;
  if (type === "secondary") style = baseStyle + `text-3xl`;
  if (type === "tertiary") style = baseStyle + `text-lg`;
  return <h1 className={style}>{children}</h1>;
}
