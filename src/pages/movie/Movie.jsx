import { AsideInfo, GalleryMovie, MovieInfo, Reviews, RecommendationSwiper } from "./components";
import { useMovie } from "./hooks"


export const Movie = () => {

    const { data, isLoading } = useMovie();

    if (isLoading) return;

    return (
        <>
            <MovieInfo {...data} />
            <div className="container px-2 sm:px-4 mx-auto pt-10 pb-16">
                <div className="grid grid-cols-2 md:grid-flow-col gap-8">
                    <div className="col-span-2">
                        <RecommendationSwiper id={data.id} />
                        <GalleryMovie id={data.id} />
                        <Reviews id={data.id} />
                    </div>
                    <AsideInfo {...data} />
                </div>
            </div>
        </>
    )
}