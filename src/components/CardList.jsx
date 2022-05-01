import React from 'react'
import PropTypes from 'prop-types';

function CardList({ movie }) {
    const { id, title, overview, poster, vote, date } = movie;
    return (
        <div className="card mb-3">
            <div className="d-flex">
                <img src={poster} style={{ height: '100px', width: '70px' }} className="img-fluid img-cover rounded-start" alt="..."></img>
                <div className="text-start px-2 overflow-hidden">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-truncate">{overview}</p>
                    <p className="card-text"><small className="text-muted">{date}</small></p>
                </div>
            </div>
        </div >
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

export default CardList