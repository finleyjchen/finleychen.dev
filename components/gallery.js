import Image from "next/image"
import { Swiper, SwiperSlide, } from "swiper/react"
import { Scrollbar, Keyboard, Mousewheel, FreeMode } from "swiper"
import 'swiper/css';
import 'swiper/css/scrollbar'
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'
import { motion } from "framer-motion";
const Gallery = ({ images, className }) => {
    return (
        <div className={"gallery " + className}>

            {images.map((image, index) => {
                var aspectRatio = image.width / image.height
                aspectRatio = Math.round(aspectRatio * 10) / 10
                var height = 1440
                var width = image.height * aspectRatio
                return (
                    <motion.div layout key={index} class={`${aspectRatio == 1.5 ? "span-2" : "span-1"}`}>
                        <Image
                            width={width}
                            height={height}
                            src={image.url}
                            alt={`gallery-${index}`}
                            blurDataURL={image.blurData ?? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nGM4OLMqyceamYGB4f/HswUR3qFejgzxzmZhTpavrh5ksDNWn9lW/ufRaQAt1RBxQP7lIQAAAABJRU5ErkJggg=="}
                            placeholder="blur"
                        />
                    </motion.div>
                )
            })}
        </div>
    )
}

export default Gallery