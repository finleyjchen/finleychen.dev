import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"


export default function IndexPage() {

  return (
    <>
      <SEO title="Finley Chen" />
      <div className="hero">
        <p className="headline">
          Hands-on, collaborative development for high converting, quality
          websites.
        </p>
        <div className="hero-links">
          <a href="mailto:finleyjchen@gmail.com">
            <span>Request a Consultation</span></a>
          or
          <Link to="/work">
            <span>See my work</span></Link>
        </div>
      </div>
    </>
  )
}
