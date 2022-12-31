import Link from "next/link"
import { useRouter } from "next/router";
import { motion } from "framer-motion"
const headerLinks = [
    "about",
    "work",
    "notes"
]

const Header = () => {
    const router = useRouter();

    return (
        <header className="header-wrapper mono">
            <div className="container">

                <div className="header">
                    <div className="">
                        <Link href="/" className={router.pathname == '/' ? "active" : ""}>
                            <>
                                Finley Chen
                            </>

                        </Link>
                    </div>
                    <div className="links">
                        {headerLinks.map((link, index) => {
                            return (
                                <Link href={`/${link}`} key={index} className={router.pathname == '/' + link ? "active" : ""}>
                                    <>
                                        {link}
                                    </>

                                </Link>
                            )
                        })}


                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header