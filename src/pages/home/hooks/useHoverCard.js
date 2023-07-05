import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../../../hooks";
import config from "../../../utils/config";

export const useHoverCard = (id) => {

    const [enableSearch, setEnableSearch] = useState(false);
    const [detail, setDetail] = useState({});

    useQuery({
        queryKey: ['detail-movie', id],
        queryFn: () => useFetch({ url: `/movie/${id}`, token: config.tokenMdb }),
        enabled: enableSearch,
        onSuccess: (data) => setDetail({ ...data })
    });

    const handlerMouseEnter = async () => {
        !enableSearch && setEnableSearch(true);
    };

    return { detail, handlerMouseEnter }
}
