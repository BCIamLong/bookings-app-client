import { ReactNode } from "react";

interface FooterListProps {
  title: string;
  children: ReactNode;
}

export default function FooterList({ title, children }: FooterListProps) {
  return (
    <ul className="flex flex-col gap-2 text-xs text-stone-600">
      <h4 className="mb-3 font-bold uppercase">{title}</h4>
      {children}
    </ul>
  );
}
