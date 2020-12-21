import React from "react"
import { Link } from "gatsby"

export default function Note({ title, date, url }) {
    return (
        <Link to={url}>
            {title}

        </Link>
    )
}