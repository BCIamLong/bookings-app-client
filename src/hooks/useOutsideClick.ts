import { useEffect, useRef } from "react";

export const useOutsideClick = function ({
  close,
  listenOnlyEventCapturing = false,
  // * by default addEventListener will listen for both capturing and bubble phases
}: {
  close: () => void;
  listenOnlyEventCapturing?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = function (e: MouseEvent) {
      if (ref.current === e.target) close();
    };
    document.addEventListener("click", clickHandler, listenOnlyEventCapturing);
    return () =>
      document.removeEventListener(
        "click",
        clickHandler,
        listenOnlyEventCapturing,
      );
  }, [close, listenOnlyEventCapturing]);

  return ref;
};
