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
  const errorStyle = " [&>input]:border-red-500 [&>input]:border-2";
  let style;
  if (type === "search") style = baseStyle + `w-full px-2`;
  if (type === "login") style = baseStyle + `flex flex-col gap-1`;
  if (type === 'profile') style = baseStyle + `flex flex-col gap-2`;

  if (errorMsg) style = style + errorStyle;

  return (
    <div className={style}>
      <Label type={type} labelFor={labelFor}>
        <span>{label} </span>
        {type === "login" && (
          <span className="inline- flex h-7 w-52 justify-end overflow-auto text-xs font-semibold normal-case  leading-3 text-red-500">
            {errorMsg && errorMsg}
          </span>
        )}
      </Label>
      {children}
    </div>
  );
}
