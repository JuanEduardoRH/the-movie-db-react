import { useQuery } from "@tanstack/react-query";
import { useFetch } from "../../../hooks";
import config from "../../../utils/config";

export const useReviews = (id) => {


    const { data: response, isLoading } = useQuery(['reviews-movies', id], () => useFetch({
        url: `/movie/${id}/reviews?language=en-US&page=1`,
        token: config.tokenMdb
    }), {
        enabled: Boolean(id),
    });

    const reviews = response?.results.map(review => {

        const { name, username, avatar_path } = review.author_details;

        review.author_details.avatar_path = generateUrlImage(avatar_path);
        review.author_details.name = name != '' ? name : username;

        return { ...review }
    }) ?? [];


    const isEmptyData = () => reviews.length <= 0 && !isLoading;

    return { reviews, isLoading, isEmptyData }
}

const generateUrlImage = (avatar_path) => {

    if (!avatar_path) return null;

    const exploded = avatar_path?.split('/');
    return `https://secure.gravatar.com/avatar/${exploded[exploded.length - 1]}`;
}