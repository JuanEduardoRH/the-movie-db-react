import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { useFetch } from "../../../hooks";
import config from "../../../utils/config";

export const useTrending = () => {

    const navigate = useNavigate();

    const { data, isLoading } = useQuery(['tranding-movies'], () => useFetch({
        url: '/trending/movie/day',
        token: config.tokenMdb,
    }));

    const movies = data?.results.slice(0, 10) ?? [];

    const handlerClick = (id) => {
        navigate(`/${id}`);
    };

    return { movies, isLoading, handlerClick }
}