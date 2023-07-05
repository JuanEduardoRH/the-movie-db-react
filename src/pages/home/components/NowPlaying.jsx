import { CardSkeleton, Pagination } from "../../../components";
import { useNowPlayingMovies } from "../hooks";
import { MovieCard } from "./MovieCard";

export const NowPlaying = () => {

    const { movies, pages, onPageChange } = useNowPlayingMovies();

    return (
        <div className='col-span-8 md:col-span-5 lg:col-span-6'>
            <h2 className='text-white text-2xl sm:text-4xl font-bold pb-10'>Peliculas recientes</h2>
            <div className='card-container grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {movies.length >= 1 ?
                    movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
                    : [...Array(20)].map((n, index) => <BoxSkeleton key={index} />)}
            </div>
            <div className="mt-16">
                <Pagination itemsPerPage={5} total={pages} onPageChange={onPageChange} forcePage={0} />
            </div>
        </div>
    )
}

const BoxSkeleton = () => {
    return <CardSkeleton className="h-[600px] xs:h-[320px] sm:h-[310px] lg:h-[239px] xl:h-[311px]" />
}