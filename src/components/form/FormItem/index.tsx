import { ReactNode } from "react";
import Label from "../Label";

interface FormItemProps {
  type: string;
  label: string;
  labelFor: string;
  errorMsg?: string;
  children: ReactNode;
}

export default function FormItem({
  type,
  label,
  labelFor,
  errorMsg,
  children,
}: FormItemProps) {
  const baseStyle = ``;
  const errorStyle = " [&>input]:border-red-500 [&>input]:border-2 [&>input]:outline-none";
  let style;
  if (type === "search") style = baseStyle + `w-full px-2 flex flex-col gap-1 border-r-[1.5px] thin:max-tiny:border-[1.5px]`;
  // if (type === "search1") style = baseStyle + `w-full px-2 flex flex-col gap-1 border-stone-300 border-[1.5px]`;
  if (type === "login") style = baseStyle + `flex flex-col gap-1`;
  if (type === 'profile')
    style = baseStyle + `flex flex-col gap-2 [&>input]:border-[1.5px]`;

  if (errorMsg) style = style + errorStyle;

  return (
    <div className={style}>
      <Label type={type} labelFor={labelFor}>
        <span>{label} </span>
        {type !== "search" && (
          <span className="inline- flex h-7 w-52 justify-end overflow-auto text-xs font-semibold normal-case  leading-3 text-red-500">
            {errorMsg && errorMsg}
          </span>
        )}
      </Label>
      {children}
    </div>
  );
}
