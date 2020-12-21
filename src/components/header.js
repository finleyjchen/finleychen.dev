import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Mail from "../icons/mail.svg"
import Twitter from "../icons/twitter.svg"
import Github from "../icons/github.svg"
import LinkedIn from "../icons/linkedin.svg"
const Header = ({ siteTitle }) => (
  <header>
    <div>
        <Link to="/" className="logo">{siteTitle}</Link>
    </div>
    <div>
      <p className="banner">Web Development &amp; Design</p>
    </div>
    <div class="">
    <ul class="social-links">
      <li class="menu-item"><a href="mailto:finleyjchen@gmail.com"><Mail /></a></li>
      <li class="menu-item"><a href="https://github.com/finleyjchen"><Github /></a></li>
      <li class="menu-item"><a href="https://twitter.com/finleychen"><Twitter /></a></li>
      <li class="menu-item"><a href="https://www.linkedin.com/in/finleychen/"><LinkedIn /></a></li>
    </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
