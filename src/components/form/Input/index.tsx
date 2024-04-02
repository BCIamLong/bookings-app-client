interface InputProps {
  type: string;
  id: string;
  placeholder: string;
}

export default function Input({ type, id, placeholder }: InputProps) {
  const baseStyle = ``;
  let style;
  if (type === "search") style = baseStyle + `w-full`;

  return (
    <input className={style} type="text" id={id} placeholder={placeholder} />
  );
}
