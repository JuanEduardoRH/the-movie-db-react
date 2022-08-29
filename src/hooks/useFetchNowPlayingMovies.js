import { useEffect, useState } from "react";
import { getNowPlayingMovies } from "../Helpers/getNowPlayingMovies";


export const useFetchNowPlayingMovies = (currentPage, setListMovies) => {

    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async () => {
        const data = await getNowPlayingMovies(currentPage);
        setListMovies((movies) => [...movies, ...data]);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [currentPage]);

    return { isLoading }
}
