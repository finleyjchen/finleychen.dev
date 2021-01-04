import React from "react"
import Website from "../icons/website.svg"
import Hosting from "../icons/hosting.svg"
import Marketing from "../icons/marketing.svg"
import Ecommerce from "../icons/ecommerce.svg"

const Services = () => (
    <React.Fragment>
    <h2>Services</h2>
      <div className="services">
        <div>
          <Website />
          Designing and developing robust websites
        </div>
        <div>
          <Hosting />
          Hosting and maintaining your website long-term
        </div>
        <div>
          <Marketing />
          Business digital strategy &amp; search engine optimization
        </div>
        <div>
          <Ecommerce />
          Optimized for WooCommerce or Shopify
        </div>
      </div>
    </React.Fragment>
)


export default Services
