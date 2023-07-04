import { useQuery } from "@tanstack/react-query"
import config from "../../../utils/config";
import { useFetch } from "../../../hooks";

export const usePopularMovies = () => {
    const { data, isLoading } = useQuery(['popular-movies-slider'], () => useFetch({
        url: '/movie/popular',
        token: config.tokenMdb,
    }));

    return { data: data?.results ?? [], isLoading }
}
