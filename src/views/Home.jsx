import React, { useEffect, useState } from 'react'
import Card from '../components/CardGrid';
import Search from '../components/Search';
import DefaultImage from '../images/image-not-found.png';

const { keyMdb } = require("../credentials/apiKeyMdb.json");

function Home() {

    const path = 'https://image.tmdb.org/t/p/w500';

    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    /* cada que hacemos scroll y lleguemos aun limite, entonces obtendremos las siguientes peliculas */
    useEffect(() => {

        const handleScroll = () => {
            const totalScrolled = window.scrollY + window.innerHeight;
            const remainigScroll = document.body.scrollHeight - totalScrolled;

            if (remainigScroll > 80) return;

            setCurrentPage(currentPage + 1);
        }

        window.addEventListener('scroll', handleScroll);

        return () => { window.removeEventListener('scroll', handleScroll) };
    }, [currentPage]);

    /* cada que cambie el valor de currentPage, entonces obtendremos las siguientes peliculas */
    useEffect(() => {

        let ignore = false;

        const getNowPlayingMovies = async (currentPage) => {

            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${currentPage}&api_key=${keyMdb}`);
            const { results } = await response.json();
            return results.map(movie => ({ id: movie.id, poster_path: movie.poster_path ? path + movie.poster_path : DefaultImage }));
        }

        getNowPlayingMovies(currentPage).then((data) => !ignore && setNowPlayingMovies((movies) => [...movies, ...data]));

        return () => { ignore = true };
    }, [currentPage]);

    return (
        <div className='container pt-2'>
            <div className='text-center pb-3'>
                <h2 className='fw-bold pb-3'>Busca tu pelicula</h2>
                <Search />
            </div>

            <div className='text-center pb-3'>
                <h2 className='fw-bold pb-3'>Peliculas recientes</h2>
                <div className='card-container row'>
                    {nowPlayingMovies.map((movie) => <div key={movie.id} className='col-sm-6 col-md-4 col-lg-3 col-xl-2 pb-4'><Card path={movie.poster_path} /></div>)}
                </div>
            </div>
        </div>
    )
}

export default Home