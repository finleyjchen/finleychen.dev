import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/" className="logo">
        Finley Chen
      </Link>
    </div>
    <nav className="menu">
      <div>
        <Link to="/work" activeClassName="active">
          <span> Portfolio</span>
        </Link>
      </div>
      <div>
        <Link to="/about" activeClassName="active">
          <span> About</span>
        </Link>
      </div>
      <div>
        <Link to="/notes" activeClassName="active">
          <span> Notes</span>
        </Link>
      </div>
      <div>
        <a href="mailto:finleyjchen@gmail.com?subject=Proposal&body=Hi%20Finley,%0D%0A">Contact</a>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
