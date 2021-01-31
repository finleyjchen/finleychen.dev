import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer>
    <div>
      <Link to="/work" activeClassName="active" >01<span> Selected Work</span></Link>
    </div>
    <div>
      <Link to="/about" activeClassName="active" >02<span> About</span></Link>
    </div>
    <div>
      <Link to="/notes" activeClassName="active" >03<span> Notes</span></Link>
    </div>
    
    <div>
      <a href="https://github.com/finleyjchen/finleychen.dev">View Source</a>
    </div>
  </footer>
)

export default Footer
