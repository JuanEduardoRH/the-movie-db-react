import { useState } from 'react';

import { MovieCard, Search, SwiperUpcoming } from './components';

import { useNowPlayingMovies, useScrollPageMovies } from './hooks';

export const Home = () => {

    const [listMovies, setListMovies] = useState([]);

    /****
     * cada que hacemos scroll y lleguemos aun limite, entonces obtendremos las siguientes peliculas
     ***/
    const { currentPage } = useScrollPageMovies();

    /***
     * cada que cambie el valor de currentPage, entonces obtendremos las siguientes peliculas 
     ***/
    const { isLoading } = useNowPlayingMovies(currentPage, setListMovies);

    return (
        <>
            <SwiperUpcoming />
            <div className='container px-2 sm:px-4 mx-auto pt-2'>


                <div className='pb-5'>
                    <h2 className='text-primary text-2xl sm:text-4xl font-bold pb-5'>Busca tu pelicula</h2>
                    <Search />
                </div>

                <div className='pb-5'>
                    <h2 className='text-primary text-2xl sm:text-4xl font-bold pb-10'>Peliculas recientes</h2>
                    <div className='card-container grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
                        {isLoading && (<h1>Cargando...</h1>)}
                        {listMovies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

