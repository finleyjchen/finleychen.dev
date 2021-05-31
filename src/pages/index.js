import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <div className="hero">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#2b2b2b" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="50" rx="48" ry="48"></ellipse><ellipse cx="50" cy="50" rx="39.400000000000006" ry="48"></ellipse><ellipse cx="50" cy="50" rx="30.799999999999997" ry="48"></ellipse><ellipse cx="50" cy="50" rx="22.200000000000003" ry="48"></ellipse><ellipse cx="50" cy="50" rx="13.599999999999994" ry="48"></ellipse><ellipse cx="50" cy="50" rx="5" ry="48"></ellipse></svg>
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
