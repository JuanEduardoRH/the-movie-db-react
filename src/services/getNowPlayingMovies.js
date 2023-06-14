
import DefaultImage from '../images/image-not-found.png';
import config from '../utils/config';

export const getNowPlayingMovies = async (currentPage) => {

    const path = 'https://image.tmdb.org/t/p/w500';
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${currentPage}&api_key=${config.keyMdb}`);
    const { results } = await response.json();

    return results.map(movie => ({
        id: movie.id,
        poster_path: movie.poster_path ? path + movie.poster_path : DefaultImage
    }));
}