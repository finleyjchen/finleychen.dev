import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Note from "../components/note-preview"
import { useNotesData } from "../hooks/notes-data"

export default function NotesPage() {
  const { edges: notes } = useNotesData()
  return (
    <Layout>
      <SEO title="Finley Chen" />
          <h1>Notes &amp; Writing</h1>
        <div className="card-box">
          <div>
            {notes.map(note => (
              <Note
                title={note.node.frontmatter.title}
                date={note.node.frontmatter.date}
                url={note.node.frontmatter.path}
                filePath={note.node.frontmatter.filePath}
              />
            ))}
          </div>
        </div>
        
    </Layout>
  )
}
