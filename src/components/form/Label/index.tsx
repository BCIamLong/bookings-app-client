import { ReactNode } from "react";

interface LabelProps {
  type: string;
  labelFor: string;
  children: ReactNode;
}

export default function Label({ type, labelFor, children }: LabelProps) {
  const baseStyle = `capitalize `;
  let style;
  if (type === "search") style = baseStyle + `font-semibold text-stone-600`;
  if (type === "login")
    style =
      baseStyle + `font-semibold text-stone-600 flex justify-between items-end`;

  return (
    <label className={style} htmlFor={labelFor}>
      {children}
    </label>
  );
}
