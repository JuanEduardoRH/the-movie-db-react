import React from 'react';

import { MdAccessTime, MdStar } from "react-icons/md";

import { Card } from "../../../components";
import { useMovieCard } from "../hooks";
import { useVote } from '../../../hooks';

export const MovieCard = ({ id, poster_path }) => {

    const { detail, handlerMouseEnter, handlerClick } = useMovieCard(id);

    return (
        <Card key={id} path={poster_path} onClick={handlerClick} onMouseEnter={handlerMouseEnter} footer={<DetailCard {...detail} />} />
    );
}

const DetailCard = ({ title, overview, runtime, vote_average }) => {
    return (
        <div className='detail-movie p-4 text-white'>
            <p className='text-left font-bold mb-1'>{title}</p>
            <p className='line-clamp-2 text-sm text-left mb-2'>{overview}</p>
            <div className='flex gap-2'>
                <span className='flex gap-1 items-center text-sm'>
                    <MdStar className='text-yellow-400' /> {useVote(vote_average)}
                </span>
                <span className='flex gap-1 items-center text-sm'>
                    <MdAccessTime /> {runtime} min
                </span>
            </div>
        </div>
    );
}