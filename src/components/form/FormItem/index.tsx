import { ReactNode } from "react";
import Label from "../Label";

interface FormItemProps {
  type: string;
  label: string;
  labelFor: string;
  children: ReactNode;
}

export default function FormItem({
  type,
  label,
  labelFor,
  children,
}: FormItemProps) {
  const baseStyle = ``;
  let style;
  if (type === "search") style = baseStyle + `w-full px-2`;
  if (type === "login") style = baseStyle + `flex flex-col gap-1`;
  return (
    <div className={style}>
      <Label type="search" labelFor={labelFor}>
        {label}
      </Label>
      {children}
    </div>
  );
}
