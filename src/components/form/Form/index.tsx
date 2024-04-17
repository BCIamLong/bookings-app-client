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
      `flex w-[400px] flex-col gap-3 rounded-lg bg-stone-100 px-6 py-8 shadow-2xl shadow-stone-300`;
  if (type === "search")
    style =
      baseStyle +
      `grid grid-cols-[12rem,9rem,9rem,9rem,3rem] gap-3 divide-x-2 rounded-full bg-white px-6 py-3 `;
  return (
    <form onSubmit={onSubmit!} className={style}>
      {children}
    </form>
  );
}
