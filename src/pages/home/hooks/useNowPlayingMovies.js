import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { useCount, useFetch } from "../../../hooks";

import config from "../../../utils/config";

import DefaultImage from '../../../images/image-not-found.png';


export const useNowPlayingMovies = () => {

    const [movies, setMovies] = useState([]);

    /**
    * a medida que vamos navegando en el paginador,
    * se gatillara una peticion para obtener nuevos resultados
    */

    const { count, setValue } = useCount(1);

    /**
     * cada que cambie el valor de currentPage, entonces obtendremos las siguientes peliculas 
     */

    const { data: response, isLoading } = useQuery(['now-playing-movies', count], () => useFetch({
        url: `/movie/now_playing?page=${count}&api_key=${config.keyMdb}`
    }));

    const newMovies = response?.results.map(movie => ({
        id: movie.id,
        poster_path: movie.poster_path ? `${config.pathImg}/w500/${movie.poster_path}` : DefaultImage
    })) ?? [];

    /**
     * Despues de cada peticion al endpoint
     * actualizamos el listado de peliculas
     */

    useEffect(() => {
        setMovies(newMovies)
    }, [response])

    return {
        movies,
        isLoading,
        pages: response?.total_pages ?? 0,
        onPageChange: setValue
    }
}