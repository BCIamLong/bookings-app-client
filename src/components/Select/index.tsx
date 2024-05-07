import { ChangeEvent, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface SelectProps {
  id: string, type: string, disabled?: boolean, children: ReactNode, registerOb?: UseFormRegisterReturn<string>,
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void,
  defaultValue?: string
}

export default function Select({ id, type, disabled, registerOb, children, onChange, defaultValue }: SelectProps) {
  const baseStyle = 'text-stone-700 text-sm bg-stone-0 ';
  let style;
  if (type === 'delete-me') style = baseStyle + 'p-2 border-[1.5px] border-stone-300 rounded-lg w-[80%] outline-stone-500'
  if (type === 'sort') style = baseStyle + 'p-2 border-[1.5px] px-6 font-semibold border-stone-300 rounded-lg outline-stone-500'

  return <select className={style} id={id} disabled={disabled} {...registerOb} onChange={onChange} defaultValue={defaultValue}>
    {children}
  </select>
}