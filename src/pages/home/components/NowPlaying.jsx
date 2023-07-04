import { useNowPlayingMovies } from "../hooks";
import { MovieCard } from "./MovieCard";

export const NowPlaying = () => {

    const { movies } = useNowPlayingMovies();

    return (
        <div className='col-span-8 md:col-span-5 lg:col-span-6'>
            <h2 className='text-white text-2xl sm:text-4xl font-bold pb-10'>Peliculas recientes</h2>
            <div className='card-container grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
            </div>
        </div>
    )
}
