import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { useRecommendations } from "../hooks";
import { SimilarMovieSlide } from "./SimilarMovieSlide";

export const SimilarSwiper = ({ id }) => {

    const { movies, isLoading } = useRecommendations(id);

    return (
        <Swiper
            className="select-none"
            initialSlide={1}
            wrapperClass="my-5"
            centeredSlides={true}
            slidesPerView={4}
            spaceBetween={20}
            speed={600}
            loop={true}
            autoplay={{
                delay: 5000,
            }}
            modules={[Autoplay]}
        >
            {movies.map(movie => <SwiperSlide
                key={movie.id}
                className="overflow-visible"
                children={<SimilarMovieSlide key={movie.id} {...movie} />}
            />)}
        </Swiper >
    )
}
