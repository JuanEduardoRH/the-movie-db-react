import React from 'react'
import PropTypes from 'prop-types';

export const CardList = ({ movie }) => {
    const { id, title, overview, poster, vote, date } = movie;
    return (
        <div className="flex">
            <img src={poster} className="w-[70px] h-[100px] object-cover rounded" />
            <div className="text-left px-4 overflow-hidden">
                <h5 className="font-bold">{title}</h5>
                <p className="line-clamp-2">{overview}</p>
                <small className="text-muted">{date}</small>
            </div>
        </div>
    )
}

CardList.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        vote: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
    })
};