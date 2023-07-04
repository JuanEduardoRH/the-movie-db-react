import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../../../hooks";
import config from "../../../utils/config";

export const useTrending = () => {

    const { data, isLoading } = useQuery(['upcoming-movies'], () => useFetch({
        url: '/trending/movie/day',
        token: config.tokenMdb,
    }));

    const movies = data?.results.slice(0, 10) ?? [];

    return { movies, isLoading }
}