import { AsideInfo, GalleryMovie, MovieInfo, Reviews, SimilarSwiper } from "./components";
import { useMovie } from "./hooks"


export const Movie = () => {

    const { data, isLoading, isEmptyData } = useMovie();

    if (isEmptyData) return;

    return (
        <>
            <MovieInfo {...data} />
            <div className="container px-2 sm:px-4 mx-auto pt-10 pb-5">
                <div className="grid grid-cols-2 md:grid-flow-col gap-8">
                    <div className="col-span-2">
                        <SimilarSwiper id={data.id} />
                        <GalleryMovie id={data.id} />
                        <Reviews id={data.id} />
                    </div>
                    <AsideInfo {...data} />
                </div>
            </div>
        </>
    )
}