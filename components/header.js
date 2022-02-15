import Link from "next/link"
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <div className="">
        <Link href="/"><a className={router.pathname == "/" ? "logo active" : "logo"}>Finley Chen</a></Link>
      </div>
      <div className="links">
        <Link href="/about"><a className={router.pathname == "/about" ? "active" : ""}>Bio</a></Link>
        <Link href="/notes"><a className={router.pathname == "/notes" ? "active" : ""}>Notes</a></Link>
      </div>
    </header>
  )
}

export default Header