import config from "../../../utils/config";

import { useVote } from "../../../hooks";

import { TfiThumbUp } from "react-icons/tfi";

import { MdCalendarMonth, MdOutlineArrowForward, MdStar } from "react-icons/md";

import dateFormat from "dateformat";

import { Button } from "../../../components";

export const MovieSlide = ({ title, backdrop_path, vote_average, overview, release_date, vote_count }) => {

    const average = useVote(vote_average);

    const now = new Date(release_date);

    return (
        <div className="flex h-[700px] relative bg-primary">
            <img className="w-full h-full object-cover opacity-90 absolute" src={`${config.pathImg}/original/${backdrop_path}`} />
            <div className="bg-gradient-to-t from-primary from-5% inset-0 absolute"></div>
            <div className="container px-2 sm:px-4 m-auto relative text-white">
                <h1 className="md:text-6xl mb-5">{title}</h1>
                <p className="line-clamp-5 mb-5 max-w-3xl">{overview}</p>
                <div className="flex gap-3 items-center mb-5">
                    <div className="flex gap-1 items-center">
                        <MdStar className="text-yellow-500" />
                        {average}
                    </div>
                    <div className="flex gap-1 items-center">
                        <MdCalendarMonth />
                        {dateFormat(now, "yyyy")}
                    </div>
                    <div className="flex gap-1 items-center">
                        <TfiThumbUp />
                        {vote_count}
                    </div>
                </div>
                <Button text='Ver Mas' iconRight={<MdOutlineArrowForward size={18} />} />
            </div>
        </div >
    );
}