import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../../../hooks";
import config from "../../../utils/config";
import { useNavigate } from "react-router-dom";

export const useMovieCard = (id) => {

    const [enableSearch, setEnableSearch] = useState(false);
    const [detail, setDetail] = useState({});

    const navigate = useNavigate();

    useQuery({
        queryKey: ['detail-movie', id],
        queryFn: () => useFetch({ url: `/movie/${id}`, token: config.tokenMdb }),
        enabled: enableSearch,
        onSuccess: (data) => setDetail({ ...data })
    });

    const handlerMouseEnter = async () => {
        !enableSearch && setEnableSearch(true);
    };

    const handlerClick = () => {
        navigate(`/${id}`, { state: { id, ...detail } });
    };

    return { detail, handlerMouseEnter, handlerClick }
}
