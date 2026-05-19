import Card from '../Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './SectionRow.css'

const SectionRow = ({ title, list }) => {
    return (
        <section className="section">
            <h2 className="section_title">{title}</h2>
            <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={{
                    540: { slidesPerView: 4 },
                    900: { slidesPerView: 5 },
                    1200: { slidesPerView: 6 },
                    1500: { slidesPerView: 7 },
                }}
            >
                {list.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <Card movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default SectionRow
