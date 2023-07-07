import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";

import { useFetch } from "../../../hooks/useFetch";
import config from "../../../utils/config";

export const useMovie = () => {

    const location = useLocation();
    const { movieId } = useParams();

    const [data, setData] = useState(location.state ?? {});
    const enableSearch = !Boolean(data?.imdb_id);
    const isEmptyData = Object.keys(data).length <= 0;

    const { data: response, isLoading } = useQuery(['detail-movie', movieId], () => useFetch({
        url: `/movie/${movieId}`,
        token: config.tokenMdb
    }), {
        enabled: enableSearch,
    });

    useEffect(() => {
        setData({ ...response })
    }, [response]);

    return { data, isLoading, isEmptyData }
}
