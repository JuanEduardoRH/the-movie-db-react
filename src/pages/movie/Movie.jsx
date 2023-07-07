import { MovieInfo } from "./components";
import { useMovie } from "./hooks"


export const Movie = () => {

    const { data, isLoading, isEmptyData } = useMovie();

    if (isEmptyData) return;

    return (
        <>
            <MovieInfo {...data} />
            <div className="container px-2 sm:px-4 mx-auto pt-10 pb-5">
            </div>
        </>
    )
}