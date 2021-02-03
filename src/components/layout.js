/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import "normalize.css"
import "../styles/styles.scss"
import { motion, AnimatePresence } from "framer-motion"
const duration = 0.2

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Finley Chen`} />
      <div className="content">
        {/* <Sidebar /> */}
        <AnimatePresence>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      </div>
        <Footer />
    </>
  )
}

export default Layout
