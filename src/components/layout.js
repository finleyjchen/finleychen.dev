/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import "normalize.css"
import "../styles/styles.scss"
import Mail from "../icons/mail.svg"
import Twitter from "../icons/twitter.svg"
import Github from "../icons/github.svg"
import LinkedIn from "../icons/linkedin.svg"
const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="content">
        <Sidebar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
