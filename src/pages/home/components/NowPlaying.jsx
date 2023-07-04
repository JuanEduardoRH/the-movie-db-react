import { useNowPlayingMovies } from "../hooks";
import { MovieCard } from "./MovieCard";

export const NowPlaying = () => {

    const { movies } = useNowPlayingMovies();

    return (
        <div className='pb-5'>
            <h2 className='text-white text-2xl sm:text-4xl font-bold pb-10'>Peliculas recientes</h2>
            <div className='card-container grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                {movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
            </div>
        </div>
    )
}
