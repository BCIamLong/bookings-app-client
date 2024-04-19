import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface SelectProps {
  id: string, type: string, disabled?: boolean, children: ReactNode, registerOb?: UseFormRegisterReturn<string>
}

export default function Select({ id, type, disabled, registerOb, children }: SelectProps) {
  const baseStyle = 'text-stone-700 text-sm ';
  let style;
  if (type === 'delete-me') style = baseStyle + 'p-2 border-[1.5px] border-stone-300 rounded-lg w-[80%] outline-stone-500'

  return <select className={style} id={id} disabled={disabled} {...registerOb}>
    {children}
  </select>
}