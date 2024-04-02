import { ReactNode } from "react";

interface FormProps {
  type: string;
  children: ReactNode;
}

export default function Form({ type, children }: FormProps) {
  const baseStyle = ``;
  let style;
  if (type === "login")
    style =
      baseStyle +
      `flex w-[400px] flex-col gap-4 rounded-lg bg-stone-100 px-6 py-8`;
  return <form className={style}>{children}</form>;
}
