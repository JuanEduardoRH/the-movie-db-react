import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../../../hooks";

export const useHoverCard = (id) => {

    const [enableSearch, setEnableSearch] = useState(false);
    const [detail, setDetail] = useState({});

    useQuery({
        queryKey: ['detail-movie', id],
        queryFn: () => useFetch({ url: `/movie/${id}` }),
        enabled: enableSearch,
        onSuccess: (data) => setDetail({ ...data })
    });

    const handlerMouseEnter = async () => {
        !enableSearch && setEnableSearch(true);
    };

    return { detail, handlerMouseEnter }
}
