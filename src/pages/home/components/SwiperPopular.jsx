import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { usePopularMovies } from "../hooks"

import { MovieSlide } from "./MovieSlide";

export const SwiperPopular = () => {

   const { data, isLoading } = usePopularMovies();

   return (
      <Swiper
         slidesPerView={1}
         speed={600}
         loop={true}
         autoplay={{
            delay: 5000,
         }}
         modules={[Autoplay]}
      >
         {data.map(movie => <SwiperSlide
            key={movie.id}
            children={<MovieSlide key={movie.id} {...movie} />}
         />)}
      </Swiper >
   )
}
