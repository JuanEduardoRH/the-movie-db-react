import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRecommendations } from "../hooks";
import { SimilarMovieSlide } from "./SimilarMovieSlide";

export const SimilarSwiper = ({ id }) => {

    const { movies, isLoading } = useRecommendations(id);

    return (
        <>
            <h2 className="text-white">Recomendaciones</h2>
            <Swiper
                className="select-none !px-10"
                initialSlide={2}
                wrapperClass="my-10"
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={20}
                speed={600}
                loop={true}
                autoplay={{
                    delay: 50000,
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    }
                }}
                modules={[Autoplay]}
            >
                {movies.map(movie => <SwiperSlide
                    key={movie.id}
                    className="overflow-visible"
                    children={<SimilarMovieSlide key={movie.id} {...movie} />}
                />)}
            </Swiper >
        </>
    )
}
