import { Link } from "gatsby"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => (
  <footer>
    <div>
      <Link to="/work">01<span> Selected Work</span></Link>
    </div>
    <div>
      <Link to="/about">02<span> About</span></Link>
    </div>
    <div>
      <Link to="/notes">03<span> Notes</span></Link>
    </div>
    
    <div>
      <a href="https://github.com/finleyjchen/finleychen.dev">View Source</a>
    </div>
  </footer>
)

export default Footer
