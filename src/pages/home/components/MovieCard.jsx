import React from 'react';

import { MdAccessTime, MdStar } from "react-icons/md";

import { Card } from "../../../components";
import { useHoverCard } from "../hooks";

export const MovieCard = ({ id, poster_path }) => {

    const { detail, handlerMouseEnter } = useHoverCard(id);

    return (
        <Card key={id} path={poster_path} onMouseEnter={handlerMouseEnter} footer={<DetailCard {...detail} />} />
    );
}

const DetailCard = ({ title, overview, runtime, vote_average }) => {
    return (
        <div className='detail-movie p-4 text-white'>
            <p className='text-left font-bold mb-1'>{title}</p>
            <p className='line-clamp-2 text-sm text-left mb-2'>{overview}</p>
            <div className='flex gap-2'>
                <span className='flex gap-1 items-center text-sm'>
                    <MdStar className='text-yellow-400' /> {Math.round(vote_average * 10) / 10}
                </span>
                <span className='flex gap-1 items-center text-sm'>
                    <MdAccessTime /> {runtime} min
                </span>
            </div>
        </div>
    );
}