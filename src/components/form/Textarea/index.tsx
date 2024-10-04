// import { ReactNode } from 'react'
import { ChangeEvent } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface TextareaProps {
  id: string
  type: 'review' | 'form' | "posts"
  placeholder?: string
  disabled?: boolean
  value?: string;
  defaultValue?: string;
  registerOb?: UseFormRegisterReturn<string>
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  // children: ReactNode
}

export default function Textarea({
  id,
  type,
  placeholder,
  disabled,
  registerOb,
  value,
  defaultValue,
  onChange,
  // children,
}: TextareaProps) {
  const baseStyle = ``
  let style;
  if (type === 'review') style = baseStyle + 'w-[70%] h-24 border-[1.5px] rounded-lg p-3 resize-none focus:outline-stone-500 bg-stone-0'
  if (type === 'posts') style = baseStyle + 'w-[70%] h-24 border-[1.5px] rounded-lg p-3 resize-none border-stone-300 bg-stone-0 focus:outline-stone-400 transition-all duration-100 text-stone-600'

  return (
    <textarea
      className={style}
      id={id}
      placeholder={placeholder || ''}
      disabled={disabled}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      {...registerOb}
    >
      {/* {children} */}
    </textarea>
  )
}
