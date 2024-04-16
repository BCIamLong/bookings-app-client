import { ChangeEventHandler } from "react";

interface InputProps {
  variant: string;
  type: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

export default function Input({
  variant,
  type,
  id,
  placeholder,
  required,
  onChange,
  value,
}: InputProps) {
  const baseStyle = ``;
  let style;
  if (variant === "search")
    style =
      baseStyle +
      `w-full outline-none focus:border-b-2 focus:border-stone-600 border-b-2 border-white transition-all duration-[600ms] ease-in-out `;
  if (variant === "login")
    style =
      baseStyle +
      `w-full p-2 rounded-md focus:border-none outline-none text-stone-600`;

  if (variant === "contact")
    style =
      baseStyle +
      `w-full rounded-full px-3 py-2 text-xs leading-5 text-inherit focus:outline-none`;

  return (
    <input
      className={style}
      type={type}
      id={id}
      placeholder={placeholder || ""}
      required={required || false}
      onChange={onChange}
      value={value}
    />
  );
}
