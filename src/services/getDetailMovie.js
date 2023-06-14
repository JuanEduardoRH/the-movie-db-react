import config from '../utils/config';

export const getDetailMovie = async (id) => {

    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${config.tokenMdb}`
        }
    });

    const { title, release_date, runtime, vote_average, overview } = await response.json();

    return { title, release_date, runtime, vote_average, overview }
}