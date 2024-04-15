import { ReactNode, FormEventHandler } from "react";

interface FormProps {
  type: string;
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export default function Form({ type, onSubmit, children }: FormProps) {
  const baseStyle = ``;
  let style;
  if (type === "login")
    style =
      baseStyle +
      `flex w-[400px] flex-col gap-4 rounded-lg bg-stone-100 px-6 py-8 shadow-2xl shadow-stone-300`;
  return (
    <form onSubmit={onSubmit!} className={style}>
      {children}
    </form>
  );
}
