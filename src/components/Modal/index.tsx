import { Dispatch, ReactNode, SetStateAction, cloneElement, createContext, useContext, useState } from "react"
import Button from "../Button"
import { HiXMark } from "react-icons/hi2"
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { createPortal } from "react-dom";

// * THIS IS THE COMPOUND COMPONENT 

interface ModalContextProps {
  openName: string;
  close: () => void
  open: Dispatch<SetStateAction<string>>
}

const ModalContext = createContext<ModalContextProps | null>(null)



function Open({ openName, children }: { openName: string, children: JSX.Element }) {
  const { open } = useModalContext()!
  return cloneElement(children, {
    onClick: (e: MouseEvent) => {
      e.preventDefault()
      open(openName)
    }
  })
}

function Window({ name, type, children }: { name: string, type?: string, children: JSX.Element }) {
  const { close, openName } = useModalContext()!
  // const modal = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const clickHandler = function (e: MouseEvent) {
  //     if (modal.current === e.target) close()
  //   }
  //   document.addEventListener('click', clickHandler, true);
  //   return () => document.removeEventListener('click', clickHandler, true)

  // }, [close])
  const modal = useOutsideClick({ close, listenOnlyEventCapturing: true })
  const baseStyle = `z-50 `
  let style;
  if (!type) style = baseStyle + 'fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center backdrop-blur-sm'
  if (type === 'brand') style = baseStyle + 'fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center backdrop-blur-sm'


  if (openName !== name) return

  return createPortal(<div className={style} ref={modal}>
    <div className="min-h-[10rem] rounded-[1rem] relative overflow-hidden shadow-sm shadow-brand-300">
      {cloneElement(children, { onCloseModal: close })}
      <div className="absolute top-3 right-3">
        <Button type={type || 'primary'} onClick={close} size="small"><HiXMark className="stroke-[1.5px]" /></Button>
      </div>
    </div>
  </div>, document.body)
}


export const useModalContext = function () {
  const context = useContext(ModalContext)

  if (context === undefined) throw new Error('The context is using outside of this context provider')

  return context
}

function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState('')
  const close = function () {

    setOpenName("false")
  }
  return (
    <ModalContext.Provider value={{ openName, close, open: setOpenName }}>{children}</ModalContext.Provider>
  )
}

Modal.Open = Open
Modal.Window = Window

export default Modal