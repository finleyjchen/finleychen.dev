import Header from "./header"
import Footer from "./footer"
import { useContext, useEffect } from "react"
import { StoreContext } from "../context/store"

const ScrollContainer = ({children}) => {
  // const { scrollRef } = useContext(StoreContext)

  // const scrollHandler = (e) => {
  //   scrollRef.current.scrollPos = e.target.scrollTop
  // }
  // useEffect(() => {
  //   document.getElementById("main").scrollTo(0, scrollRef.current.scrollPos)
  // });
  return(
    <main 
    className="main"
    id="main"
    // onScroll={scrollHandler}
    >
      {children}
   </main>
  )
}

const Layout = ({ meta, children }) => {


  return (
    <div className="wrapper">
      <div className="hud">
        <div className="hud-content">
          <Header />
          <Footer />
        </div>
      </div>
      <div className="container">
        <ScrollContainer>
          {children}
        </ScrollContainer>
      </div>
    </div>
  )
}

export default Layout