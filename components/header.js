import Link from "next/link"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Finley Chen</Link>
      </div>
      <div className="links">
        <Link href="/about">Bio</Link>
      </div>
    </header>
  )
}

export default Header