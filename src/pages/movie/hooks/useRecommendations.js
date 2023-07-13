import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../../../hooks";
import config from "../../../utils/config";

export const useRecommendations = (id) => {

    const { data: response, isLoading } = useQuery(['recommendations-movies', id], () => useFetch({
        url: `/movie/${id}/recommendations?language=en-US&page=1`,
        token: config.tokenMdb
    }), {
        enabled: Boolean(id),
    });

    const movies = response?.results ?? []

    const isEmptyData = () => movies.length <= 0 && !isLoading;

    return { movies, isLoading, isEmptyData }
}