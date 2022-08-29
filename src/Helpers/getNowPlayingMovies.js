
import DefaultImage from '../images/image-not-found.png';

const { keyMdb } = require("../credentials/apiKeyMdb.json");
const path = 'https://image.tmdb.org/t/p/w500';

export const getNowPlayingMovies = async (currentPage) => {

    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${currentPage}&api_key=${keyMdb}`);
    const { results } = await response.json();

    return results.map(movie => ({
        id: movie.id,
        poster_path: movie.poster_path ? path + movie.poster_path : DefaultImage
    }));
}