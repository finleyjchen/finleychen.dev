import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer>
    <div>
      <Link to="/" className="box">
      <svg viewBox="0 0 100 100" fill="currentColor"><rect width="100" height="100"></rect></svg>
      </Link>
    </div>
    <div>
      <Link to="/about">About</Link>
    </div>
    <div>
      <Link to="/work">Work</Link>
    </div>
    <div>
      <Link to="/notes">Notes</Link>
    </div>
    
    <div>
      <a href="https://github.com/finleyjchen/finleychen.dev">View Source</a>
    </div>
  </footer>
)

export default Footer
