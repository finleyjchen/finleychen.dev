import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <div className="hero">
        <h1 className="headline">
          Frictionless web development + design for small businesses
        </h1>
        <p className="subtitle">
          Custom websites that are fast, accessible,
          responsive, and SEO-optimized.
        </p>
        <div className="hero-links">
          <Link className="button" to="/work">
            <span>See my work</span>
          </Link>
          <Link className="button" to="/about">
            <span>Learn about me</span>
          </Link>
        </div>
      </div>
    </>
  )
}
