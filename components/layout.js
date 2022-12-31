import Header from "./header"
import Footer from "./footer"
import { useContext, useEffect, useRef, useState } from "react"
import { StoreContext } from "../context/store"
import Head from "next/head"

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

const Layout = ({ title, description, meta, children }) => {
    var compiledTitle = title + ' - Finley Chen'
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>
                    {compiledTitle}
                </title>
                {description &&
                    <meta property="description" content={description} />
                }
                <meta property="og:title" content={compiledTitle} />
                <meta name="twitter:title" content={compiledTitle} />
                {description &&
                    <>
                        <meta property="og:description" content={description} />
                        <meta name="twitter:description" content={description} />
                    </>
                }
            </Head>
            <div className="wrapper">
                <Header />
                <div className="container">
                    <ScrollContainer>
                        {children}
                    </ScrollContainer>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout