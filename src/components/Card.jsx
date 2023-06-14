import PropTypes from 'prop-types'

// import { MdAccessTime, MdStar } from "react-icons/md";

export const Card = ({ path, className = '', footer = null, onMouseEnter }) => {
    return (
        <div
            onMouseEnter={onMouseEnter}
            className={`group/overlay rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:z-10 cursor-pointer shadow-lg shadow-black/25 relative ${className}`}>
            <img src={path} className='object-cover h-full w-full' alt='imagen'></img>
            <div className='absolute overflow-hidden flex flex-col-reverse flex-1 transition-all duration-300 inset-x-0 bottom-0 top-full group-hover/overlay:top-1/4 bg-gradient-to-t from-black/80 to-transparent'>
                {footer}
            </div>
        </div>
    )
}

Card.propTypes = {
    path: PropTypes.string.isRequired
}