// import { ReactNode } from 'react'
import { ChangeEvent } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface TextareaProps {
  id: string
  type: 'review' | 'form'
  placeholder?: string
  disabled?: boolean
  value?: string;
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
  onChange,
  // children,
}: TextareaProps) {
  const baseStyle = ``
  let style;
  if (type === 'review') style = baseStyle + 'w-[70%] h-24 border-[1.5px] rounded-lg p-3 resize-none focus:outline-stone-500'

  return (
    <textarea
      className={style}
      id={id}
      placeholder={placeholder || ''}
      disabled={disabled}
      onChange={onChange}
      value={value}
      {...registerOb}
    >
      {/* {children} */}
    </textarea>
  )
}
