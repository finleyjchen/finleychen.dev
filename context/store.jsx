import { createContext, useState, useRef } from 'react'

export const StoreContext = createContext(null)

export const StoreProvider = ({ children }) => {


  const store = {

  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}