import { Card } from "../../../components";
import config from "../../../utils/config";
import { useTrending } from "../hooks"

import dateFormat from "dateformat";

export const Trending = () => {

    const { movies, isLoading } = useTrending();

    return (
        <div className="col-span-8 md:col-span-3 lg:col-span-2">
            <h6 className='bg-primary-700 text-center align-middle text-white font-bold py-3 mb-9'>TRENDING</h6>
            <div className="flex flex-col gap-6">
                {movies.map(movie => <CardContainer key={movie.id} {...movie} />)}
            </div>
        </div>
    )
}

const CardContainer = ({ title, poster_path, release_date }) => {

    const now = new Date(release_date);

    return (
        <div className="flex">
            <Card path={`${config.pathImg}/w500/${poster_path}`} className="w-1/3" />
            <div className="w-2/3 pl-2 text-white">
                <p className="line-clamp-2">{title}</p>
                <small className="font-light text-primary-200">{dateFormat(now, "yyyy")}</small>
            </div>
        </div>
    );
}
