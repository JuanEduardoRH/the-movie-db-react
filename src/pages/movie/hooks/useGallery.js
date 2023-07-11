import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../../../hooks";
import config from "../../../utils/config";

export const useGallery = (id) => {

    const { data: response, isLoading } = useQuery(['images-movies', id], () => useFetch({
        url: `/movie/${id}/images?include_image_language=en&language=en`,
        token: config.tokenMdb
    }), {
        enabled: Boolean(id),
    });

    // const images = response?.backdrops.slice(0, 8) ?? []
    const images = response?.backdrops ?? []

    return { images, isLoading }
}