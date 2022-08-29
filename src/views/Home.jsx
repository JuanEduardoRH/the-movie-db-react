import { useState } from 'react';
import Card from '../components/CardGrid';
import Search from '../components/Search';
import { useFetchNowPlayingMovies } from '../hooks/useFetchNowPlayingMovies';
import { useScrollPageMovies } from '../hooks/useScrollPageMovies';

function Home() {

    const [listMovies, setListMovies] = useState([]);

    /* cada que hacemos scroll y lleguemos aun limite, entonces obtendremos las siguientes peliculas */
    const { currentPage } = useScrollPageMovies();

    /* cada que cambie el valor de currentPage, entonces obtendremos las siguientes peliculas */
    const { isLoading } = useFetchNowPlayingMovies(currentPage, setListMovies);

    return (
        <div className='container pt-2'>
            <div className='text-center pb-3'>
                <h2 className='fw-bold pb-3'>Busca tu pelicula</h2>
                <Search />
            </div>

            <div className='text-center pb-3'>
                <h2 className='fw-bold pb-3'>Peliculas recientes</h2>
                <div className='card-container row'>
                    {isLoading && (<h1>Cargando...</h1>)}
                    {listMovies.map((movie) => <div key={movie.id} className='col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-4'><Card path={movie.poster_path} /></div>)}
                </div>
            </div>
        </div>
    )
}

export default Home