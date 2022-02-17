import { createContext, useState, useRef } from 'react'

export const StoreContext = createContext(null)

export const StoreProvider = ({ children }) => {
  const [scroll, setScroll] = useState(0)
  const scrollRef = useRef({
    scrollPos: 0
  })

  const store = {
    scrollRef,
    scroll,
    setScroll,
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}