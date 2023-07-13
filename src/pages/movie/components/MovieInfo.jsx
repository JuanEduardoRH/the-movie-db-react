import dateFormat from "dateformat";

import { useScore } from "../../../hooks";

import { ScoreIndicator } from "../../../components";

import config from "../../../utils/config";

export const MovieInfo = ({ release_date, poster_path, backdrop_path, title, genres = [], vote_average, tagline, overview }) => {

    const now = new Date(release_date ?? null);

    const score = useScore(vote_average);

    return (
        <div className="relative">
            <img className="w-full h-full object-cover opacity-90 absolute" src={`${config.pathImg}/original/${backdrop_path}`} />
            {/* <div className="bg-primary-800/75 inset-0 absolute"></div> */}
            <div className="bg-gradient-to-t from-primary to-primary/30 inset-0 absolute"></div>
            <div className="container relative px-2 sm:px-4 mx-auto flex flex-col md:flex-row gap-10 md:h-[600px]">
                <div className="hidden md:block my-auto w-auto md:min-w-[300px]">
                    <img className="rounded-lg" src={`${config.pathImg}/w300/${poster_path}`} alt="" />
                </div>
                <div className="flex flex-col my-10 md:my-auto text-white">
                    <h2 className="mb-1">{title} <span className="text-primary-200">({dateFormat(now, "yyyy")})</span></h2>
                    {<Genres genres={genres} />}
                    <div className="flex gap-2 items-center mb-5">
                        <ScoreIndicator score={score} />
                        <span className="font-bold">Puntuación de usuario</span>
                    </div>
                    <div className="italic text-lg text-gray-400 mb-3">{tagline}</div>
                    <h4 className="mb-2">General description</h4>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
}

const Genres = ({ genres }) => {

    const names = genres.map(genre => genre.name).join(', ');

    return (
        <span className="mb-3">{names}</span>
    );
}
