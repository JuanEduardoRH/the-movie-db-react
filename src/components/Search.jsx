import React, { useState } from 'react'
import CardList from './CardList';
import defaultImage from '../images/image-not-found.png';

const { keyMdb } = require("../credentials/apiKeyMdb.json");

let timeout;

const getMovies = async (keyword) => {
    const path = 'https://image.tmdb.org/t/p/w500';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${keyMdb}&query=`;
    const response = await fetch(url + keyword);
    const { results } = await response.json();

    return results.slice(0, 5).map(movie => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster: movie.poster_path ? path + movie.poster_path : defaultImage,
        vote: movie.vote_average,
        date: movie.release_date,
    }));
}

function Search() {

    const [inputSearch, setInputSearch] = useState('');
    const [isSearching, setIsSearching] = useState(true);
    const [listMovies, setListMovies] = useState([]);
    const [isOpenSearchContainer, setIsOpenSearchContainer] = useState(false);

    const handleInputSearch = async (e) => {

        const value = e.target.value.trim();

        console.log(value);

        setListMovies([]);
        setInputSearch(value);
        setIsSearching(true);

        clearTimeout(timeout);

        await new Promise(resolve => {
            timeout = setTimeout(() => resolve(), 400);
        });

        if (value) {
            setListMovies(await getMovies(value));
            setIsSearching(false);
        }

        if (!value) setListMovies([]);
    }

    const handleOutsideClick = (event) => {
        const searchResult = event.target.closest('.search-results');

        if (searchResult || event.target.classList.contains('input-searcher')) return;

        setIsOpenSearchContainer(false);
        setListMovies([]);
        setInputSearch('');

        document.removeEventListener('click', handleOutsideClick);
    }

    const handleIsOpenSearch = (e) => {

        if (isOpenSearchContainer) return;

        setIsOpenSearchContainer(true);

        document.addEventListener('click', handleOutsideClick);
    }

    const messageHtmlSearching = () => {
        let html = '';

        if (isSearching) {
            html = <div className="content-searching active">
                <div className="spinner-border spinner-border-sm text-secondary" role="status"></div>
                <label className='ps-2'>Buscando peliculas...</label>
            </div>;
        }

        if (!isSearching && !listMovies.length) {
            html = <p className='text-center mb-0'>No hay resultados</p>;
        }

        return html;
    }

    return (
        <div className='search-container position-relative'>
            <form className="d-flex">
                <input className="form-control input-searcher" type="search" placeholder="Search" onClick={handleIsOpenSearch} onChange={handleInputSearch} value={inputSearch} />
            </form>
            <div className={`search-results mt-2 py-3 p-3 d-block rounded border shadow bg-white position-absolute w-100 ${inputSearch.length ? 'active' : ''}`}>
                {messageHtmlSearching()}
                <div className={`content-result ${listMovies.length ? 'active' : ''}`} >
                    {listMovies.map(movie => <CardList key={movie.id} movie={movie} />)}
                </div>
            </div>
        </div >
    )
}

export default Search