import { ReactNode, FormEventHandler } from "react";
import { useTranslation } from "react-i18next";

interface FormProps {
  type: string;
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export default function Form({ type, onSubmit, children }: FormProps) {
  const { i18n } = useTranslation()
  console.log(i18n.language)
  const baseStyle = ` `;
  let style;
  if (type === "login")
    style =
      baseStyle +
      `flex w-[30rem] flex-col gap-3 rounded-lg bg-stone-100 px-6 py-8 shadow-2xl shadow-stone-300`;
  if (type === "search")
    style =
      baseStyle +
      `grid ${i18n.language === 'vi-VN' ? 'grid-cols-[2.2fr_2fr_2fr_2.8fr_1fr]' : 'grid-cols-[3fr_2fr_2fr_2fr_1fr]'} gap-3 justify-center divide-x-2 rounded-full bg-stone-0 px-6 py-3`;
  if (type === "search1")
    style =
      baseStyle +
      `grid ${i18n.language === 'vi-VN' ? 'grid-cols-[2fr_2fr_2fr_1fr]' : 'grid-cols-[2.5fr_2.5fr_2.5fr_1.5fr]'} gap-3 justify-center rounded-full bg-stone-0 px-6 py-3 min-h-[5.7rem] thin:max-tiny:grid-cols-[2fr_2fr] thin:max-tiny:rounded-lg`;
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
