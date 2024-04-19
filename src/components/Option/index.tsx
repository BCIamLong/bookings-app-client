import { ReactNode } from "react";

export default function Option({ type, value, children }: { type: string, value: string, children: ReactNode }) {
  const baseStyle = '';
  let style;
  if (type === 'delete-me') style = baseStyle + ''
  return <option className={style} value={value}>{children}</option>
}