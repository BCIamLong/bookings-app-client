import { useEffect, useState } from 'react'

export const useLocalStorageState = function <T>({
  key,
  initialState,
}: {
  key: string
  initialState: T
}) {
  const [state, setState] = useState(() => {
    const rawVal = localStorage.getItem(key)
    return JSON.parse(rawVal!) || initialState
  })

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(state))
    },
    [state, key],
  )

  return [state, setState]
}
