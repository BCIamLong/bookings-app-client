import { ReactNode, FormEventHandler } from "react";

interface FormProps {
  type: string;
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export default function Form({ type, onSubmit, children }: FormProps) {
  const baseStyle = ` `;
  let style;
  if (type === "login")
    style =
      baseStyle +
      `flex w-[30rem] flex-col gap-3 rounded-lg bg-stone-100 px-6 py-8 shadow-2xl shadow-stone-300`;
  if (type === "search")
    style =
      baseStyle +
      `grid grid-cols-[12rem,9rem,9rem,9rem,3rem] gap-3 divide-x-2 rounded-full bg-stone-0 px-6 py-3 `;
  if (type === 'profile')
    style =
      baseStyle +
      `flex w-full flex-col gap-6 pr-6 py-8 border-b-[1.5px] border-stone-300`;
  return (
    <form onSubmit={onSubmit!} className={style}>
      {children}
    </form>
  );
}
