interface InputProps {
  variant: string;
  type: string;
  id: string;
  placeholder?: string;
  required?: boolean;
}

export default function Input({
  variant,
  type,
  id,
  placeholder,
  required,
}: InputProps) {
  const baseStyle = ``;
  let style;
  if (variant === "search") style = baseStyle + `w-full`;
  if (variant === "login")
    style =
      baseStyle +
      `w-full p-2 rounded-md focus:border-none outline-none text-stone-600`;

  return (
    <input
      className={style}
      type={type}
      id={id}
      placeholder={placeholder || ""}
      required={required || false}
    />
  );
}
