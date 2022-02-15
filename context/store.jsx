import { createContext, useState } from 'react'

export const StoreContext = createContext(null)

export const StoreProvider = ({ children }) => {
  const [navActive, setNavActive] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [activeForm, setActiveForm] = useState({})
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [mouseY, setMouseY] = useState()
  const [hideLeaveSiteForm, setHideLeaveSiteForm] = useState(false)
  const [hubspotLoaded, setHubspotLoaded] = useState(false)

  const store = {
    navActive,
    setNavActive,
    scroll,
    setScroll,
    activeForm,
    setActiveForm,
    formModalOpen,
    setFormModalOpen,
    mouseY,
    setMouseY,
    hideLeaveSiteForm,
    setHideLeaveSiteForm,
    hubspotLoaded, 
    setHubspotLoaded
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}