import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import { useReviews } from "../hooks";
import { ReviewMovieSlide } from "./ReviewMovieSlide";

export const Reviews = ({ id }) => {
    
    const { reviews, isLoading, isEmptyData } = useReviews(id);

    return (
        <>
            {!isEmptyData()
                ? <>
                    <h3 className="text-white mb-5 mt-14">Reviews</h3>
                    <Swiper
                        className="select-none !px-10"
                        initialSlide={1}
                        wrapperClass="my-10"
                        slidesPerView={1}
                        spaceBetween={20}
                        speed={600}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                            }
                        }}
                        modules={[Autoplay]}
                    >
                        {reviews.map(review => <SwiperSlide
                            key={review.id}
                            children={<ReviewMovieSlide key={review.id} {...review} />}
                        />)}
                    </Swiper >
                </>
                : null
            }
        </>
    )
}
