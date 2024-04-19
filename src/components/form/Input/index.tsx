// import { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  variant: string;
  type: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  //! RegisterOptions<HTMLInputElement> this will cause the conflict types and make TS can't work well with our VSCode and it made our intelligence suggestion of TS in VSCode is error with always loading...
  // * type of register is UseFormRegister<FieldValues(like LoginInput, if we use this type we need to extends the LoginInput with FieldValues)> and its result is UseFormRegisterReturn<string> so basically UseFormRegisterReturn<string> is the result of the register with the key we assign right like {...register('name')}
  registerOb?: UseFormRegisterReturn<string>
  // required?: boolean;
  // onChange?: ChangeEventHandler<HTMLInputElement>;
  // value?: string;
}

export default function Input({
  variant,
  type,
  id,
  placeholder,
  disabled,
  registerOb,
  // required,
  // onChange,
  // value,
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
      `w-full p-2 rounded-md border-white outline-none text-stone-600 border-2`;

  if (variant === "contact")
    style =
      baseStyle +
      `w-full rounded-full px-3 py-2 text-xs leading-5 text-inherit focus:outline-none`;

  if (variant === 'profile')
    style =
      baseStyle +
      `w-[80%] rounded-lg  border-[1.5px] border-stone-300 px-3 py-3 text-sm leading-5 text-stone-700 focus:outline-2 outline-stone-500`;

  return (
    <input
      className={style}
      type={type}
      id={id}
      placeholder={placeholder || ""}
      disabled={disabled}
      {...registerOb}
    // required={required || false}
    // onChange={onChange}
    // value={value}
    />
  );
}
