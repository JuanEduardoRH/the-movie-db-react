import { useQuery } from "@tanstack/react-query";
import {  useParams } from "react-router-dom";

import { useFetch } from "../../../hooks/useFetch";
import config from "../../../utils/config";

export const useMovie = () => {

    // const location = useLocation();
    const { movieId } = useParams();

    // const [data, setData] = useState(location?.state ?? {});
    // const enableSearch = !Boolean(data?.imdb_id);
    // const isEmptyData = !Boolean(data?.imdb_id);
    // const isRefetch = Boolean(location?.state?.refetch);

    // console.log(isRefetch, enableSearch)

    const { data: response, isLoading } = useQuery(['detail-movie', movieId], () => useFetch({
        url: `/movie/${movieId}`,
        token: config.tokenMdb
    }), {
        // enabled: enableSearch,
    });

    // useEffect(() => {
        // si no existe data previamente recibida y no es necesario realizar la peticion
        // if (!isEmptyData && !isRefetch) return;
        // if (!isEmptyData) return;

        // setData({ ...response });
    // }, [response]);

    return { data: response, isLoading }
}
