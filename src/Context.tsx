import { useContext, createContext, ReactNode, useState } from "react"

export const Context = createContext({
  count: 0,
  setCount: (count: number) => {},
})

export function ContextProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  )
}

export function useCount() {
  const { count, setCount } = useContext(Context)

  return { count, setCount }
}
