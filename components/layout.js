import Header from "./header"
import Footer from "./footer"
import { useContext, useEffect, useRef, useState } from "react"
import { StoreContext } from "../context/store"

const ScrollContainer = ({ children }) => {

    return (
        <main
            className="main"
            id="main"
        >
            {children}
        </main>
    )
}

const Layout = ({ meta, children }) => {


    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <ScrollContainer>
                    {children}
                </ScrollContainer>
            </div>
            <Footer />
        </div>
    )
}

export default Layout