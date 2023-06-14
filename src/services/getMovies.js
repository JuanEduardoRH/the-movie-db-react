import defaultImage from '../images/image-not-found.png';

import config from '../utils/config';

export const getMovies = async (keyword) => {

    const path = 'https://image.tmdb.org/t/p/w500';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${config.keyMdb}&query=`;

    const response = await fetch(url + keyword);

    const { results } = await response.json();

    return results.map(movie => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster: movie.poster_path ? path + movie.poster_path : defaultImage,
        vote: movie.vote_average,
        date: movie.release_date,
    }));
}