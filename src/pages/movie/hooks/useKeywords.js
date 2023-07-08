import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../../../hooks";
import config from "../../../utils/config";

export const useKeywords = (id) => {

    const { data: response, isLoading } = useQuery(['list-keywords-movie', id], () => useFetch({
        url: `/movie/${id}/keywords`,
        token: config.tokenMdb
    }), {
        enabled: Boolean(id),
    });

    const data = response?.keywords ?? []

    return { data, isLoading }
}