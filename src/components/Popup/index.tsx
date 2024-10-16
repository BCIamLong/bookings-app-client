import { HiXMark } from "react-icons/hi2";
import Button from "../Button";
import Buttons from "../Buttons";
import Heading from "../Heading";
import Spinner from "../Spinner";
import { ReactNode } from "react";

interface PopupProps { title?: string, isLoading: boolean, btnContent: string, onHandle: () => void, onCloseModal?: () => void, children: ReactNode }

export default function Popup({ title, isLoading, btnContent, onHandle, onCloseModal, children }: PopupProps) {
  const titleText = title ? title : 'Are you sure to perform this action?'
  return <div className="flex flex-col gap-4 w-[33rem] bg-stone-100 py-8 px-8 text-stone-600">

    <Heading type="tertiary">{titleText}</Heading>
    {children}
    <Buttons>
      <Button type="secondary" onClick={onCloseModal} size="medium">
        <span><HiXMark className="stroke-[1.5px]" /></span>
        <span>Cancel</span>
      </Button>
      {btnContent === '' ?
        null :
        <Button type="primary" size="medium" onClick={onHandle}>
          {isLoading ? <Spinner size="small" /> : <span>{btnContent}</span>}
        </Button>}
    </Buttons>
  </div>
}