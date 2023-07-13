import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper';
import { useRecommendations } from "../hooks";
import { RecommendationMovieSlide } from "./RecommendationMovieSlide";

export const RecommendationSwiper = ({ id }) => {

    const { movies, isLoading, isEmptyData } = useRecommendations(id);

    return (
        <>
            {!isEmptyData()
                ? <>
                    <h2 className="text-white">Recomendaciones</h2>
                    <Swiper
                        className="select-none !px-10"
                        initialSlide={1}
                        wrapperClass="my-10"
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={20}
                        speed={600}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
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
                            children={<RecommendationMovieSlide key={movie.id} {...movie} />}
                        />)}
                    </Swiper >
                </>
                : null
            }
        </>
    )
}
