import Link from "next/link"
import { ArrowRightIcon } from '@radix-ui/react-icons'

const Hero = () => {
    return (
        <section className='hero'>
            <h2 className="hero-headline">Creating modern <br /> websites, <i className="serif">pragmatically</i>.</h2>
            <p className='lead'>Building marketing-focused digital experiences and other cool stuff @ <a className="serif" href="https://digitalimpulse.com">Digital Impulse</a>.</p>
        </section>
    )
}
export default Hero