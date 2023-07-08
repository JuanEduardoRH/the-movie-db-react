import { AsideInfo, MovieInfo, SimilarSwiper } from "./components";
import { useMovie } from "./hooks"


export const Movie = () => {

    const { data, isLoading, isEmptyData } = useMovie();

    if (isEmptyData) return;

    return (
        <>
            <MovieInfo {...data} />
            <div className="container flex gap-8 px-2 sm:px-4 mx-auto pt-10 pb-5">
                <SimilarSwiper id={data.id} />
                <AsideInfo {...data} />
            </div>
        </>
    )
}