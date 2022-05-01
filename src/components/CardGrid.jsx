import React from 'react'
import PropTypes from 'prop-types'

function Card({ path }) {
    return (
        <div className="card card-animation shadow h-100">
            <img src={path} className='card-img img-cover h-100' alt='imagen'></img>
        </div>
    )
}

Card.propTypes = {
    path: PropTypes.string.isRequired
}

export default Card