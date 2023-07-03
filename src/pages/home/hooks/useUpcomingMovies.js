import { useQuery } from "@tanstack/react-query"
import config from "../../../utils/config";
import { useFetch } from "../../../hooks";

export const useUpcomingMovies = () => {
    const { data, isLoading } = useQuery(['upcoming-movies-slider'], () => useFetch({
        url: '/movie/upcoming',
        token: config.tokenMdb,
    }));

    return { data: data?.results ?? [], isLoading }
}
