import { Link } from "gatsby"
import React from "react"
import { DateTime } from "luxon"
import YinYang from "../icons/yin-yang.svg"
const Sidebar = () => {

  

  return(
    <aside className="sidebar">
    <div class="bio">
      <p>
        Finley Chen is a San Luis Obispo-based Web Developer and Designer
        with a specialty in eCommerce, migrations, and SEO.
      </p>
    </div>
    <div>
    <p>Currently available for freelance projects.</p>

      <ul className="social-links">
        <li className="menu-item">
          <a href="mailto:finleyjchen@gmail.com">
            {/* <Mail /> */}
            email
          </a>
        </li>
        <li className="menu-item">
          <a href="https://github.com/finleyjchen">
            {/* <Github /> */}
            github
          </a>
        </li>
        <li className="menu-item">
          <a href="https://twitter.com/finleychen">
            {/* <Twitter /> */}
            twitter
          </a>
        </li>
        <li className="menu-item">
          <a href="https://www.linkedin.com/in/finleychen/">
            {/* <LinkedIn /> */}
            linkedin
          </a>
        </li>
      </ul>
    </div>
    <div class="meta">
      <YinYang />
      <div class="time">
      
      San Luis Obispo, CA
      </div>
    </div>
  </aside>
)
}

export default Sidebar