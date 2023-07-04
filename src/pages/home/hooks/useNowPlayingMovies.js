import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { useFetch } from "../../../hooks";

import config from "../../../utils/config";
import { useScrollPageMovies } from "./useScrollPageMovies";

import DefaultImage from '../../../images/image-not-found.png';


export const useNowPlayingMovies = () => {
    
    const [movies, setMovies] = useState([]);

    /**
    * a medida que vamos navegando en el paginador,
    * se gatillara una peticion para obtener nuevos resultados
    */
    
    const [page, setPage] = useState(1);


    /**
    * cada que hacemos scroll y lleguemos aun limite, entonces obtendremos las siguientes peliculas
    */
    // const { currentPage } = useScrollPageMovies();

    /**
     * cada que cambie el valor de currentPage, entonces obtendremos las siguientes peliculas 
     */

    const { data: response, isLoading } = useQuery(['now-playing-movies', page], () => useFetch({
        url: `/movie/now_playing?page=${page}&api_key=${config.keyMdb}`
    }));

    const newMovies = response?.results.map(movie => ({
        id: movie.id,
        poster_path: movie.poster_path ? `${config.pathImg}/w500/${movie.poster_path}` : DefaultImage
    })) ?? [];

    /**
     * Despues de cada peticion al endpoint
     * agregaremos las nuevas peliculas obtenidas al listado actual
     */

    useEffect(() => {
        setMovies((movies) => [...movies, ...newMovies]);
    }, [response])

    return { movies, isLoading }
}