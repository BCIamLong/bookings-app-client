import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface FooterListProps {
  title: string;
  children: ReactNode;
}

export default function FooterList({ title, children }: FooterListProps) {
  const { t } = useTranslation()
  return (
    <ul className="flex flex-col gap-2 text-xs text-stone-600">
      <h4 className="mb-3 font-bold uppercase">{t(`footer.nav.${title.split(' ')[0].toLocaleLowerCase()}.heading`)}</h4>
      {children}
    </ul>
  );
}
