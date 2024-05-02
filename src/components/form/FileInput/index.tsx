import { UseFormRegisterReturn } from "react-hook-form";

interface FileInputProps {
  variant: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  registerOb?: UseFormRegisterReturn<string>

}


export default function FileInput({
  variant,
  id,
  placeholder,
  disabled,
  registerOb,
}: FileInputProps) {
  const baseStyle = `file:duration-300 file:transition-all `;
  let style;
  if (variant === "profile")
    style =
      baseStyle + `hover:file:cursor-pointer hover:file:bg-stone-600 file:border-none file:bg-stone-700 file:text-stone-100 file:px-3 file:py-2 file:rounded-lg file:font-semibold text-sm file:mr-3 text-stone-700 w-[24%] border-none thin:max-tiny:w-[35%] tiny:max-sm:w-[40%] sm:max-md:w-[33%] md:max-lg:w-[28%]`;
  return <input
    className={style}
    type='file'
    id={id}
    placeholder={placeholder || ""}
    disabled={disabled}
    {...registerOb}
  />
}