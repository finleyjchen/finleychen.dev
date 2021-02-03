import React from "react"
import Website from "../icons/website.svg"
import Hosting from "../icons/hosting.svg"
import Marketing from "../icons/marketing.svg"
import Ecommerce from "../icons/ecommerce.svg"

const Services = () => (
    <React.Fragment>
      <div className="services">
        <div>
          <Website />
          <h3>Design &amp; Development</h3>
          <p>Designing and developing robust websites with a focus on user experience.</p>
        </div>
        <div>
          <Marketing />
          <h3>Garnering Growth</h3>
          <p>Business digital strategy and search engine optimization to reach your customers.</p>
        </div>
        <div>
          <Hosting />
          <h3>Superior Support</h3>
          <p>Hosting and maintaining your website long-term, with secure backups and recovery.</p>
        </div>

      </div>
    </React.Fragment>
)


export default Services
