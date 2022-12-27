import Image from "next/image"
import { Swiper, SwiperSlide, } from "swiper/react"
import { Scrollbar, Keyboard, Mousewheel, FreeMode } from "swiper"
import 'swiper/css';
import 'swiper/css/scrollbar'
import 'swiper/css/keyboard'
import 'swiper/css/mousewheel'
const Gallery = ({ images }) => {
    return (
        <div className="gallery">
            <Swiper
                spaceBetween={50}
                centeredSlides
                className="gallery-swiper"
                // autoHeight
                modules={[Scrollbar, Keyboard, Mousewheel, FreeMode]}
                keyboard
                freeMode
                parallax
            >
                {images.map((image, index) => {
                    var height = 600
                    var width = height * image.aspectRatio
                    return (
                        <SwiperSlide key={index}>
                            <Image layout="responsive" width={width} height={height} src={image.url} alt={`gallery-${index}`} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Gallery