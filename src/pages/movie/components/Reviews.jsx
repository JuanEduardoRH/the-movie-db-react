import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useReviews } from "../hooks";
import { ReviewMovieSlide } from "./ReviewMovieSlide";

export const Reviews = ({ id }) => {
    const { reviews, isLoading } = useReviews(id);

    return (
        <>
            <h2 className="text-white my-10">Reviews</h2>
            <Swiper
                className="select-none !px-10"
                initialSlide={1}
                wrapperClass="my-10"
                slidesPerView={2}
                spaceBetween={20}
                speed={600}
                loop={true}
                autoplay={{
                    delay: 50000,
                }}
                // breakpoints={{
                //     400: {
                //         slidesPerView: 2,
                //     },
                //     640: {
                //         slidesPerView: 3,
                //     },
                //     1024: {
                //         slidesPerView: 4,
                //     }
                // }}
                modules={[Autoplay]}
            >
                {reviews.map(review => <SwiperSlide
                    key={review.id}
                    children={<ReviewMovieSlide key={review.id} {...review} />}
                />)}
            </Swiper >
        </>
    )
}
