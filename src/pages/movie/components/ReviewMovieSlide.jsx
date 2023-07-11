import ImgDefault from '../../../images/image-not-found.png'
import { monthNames } from '../../../utils';

import dateFormat, { i18n } from 'dateformat';

export const ReviewMovieSlide = ({ author_details, created_at, content, name }) => {

    const now = new Date(created_at);

    i18n.monthNames = monthNames();

    return (
        <div className="transition-all duration-300 bg-primary-400/40 hover:bg-primary-400/60 text-white rounded-lg p-5 ">
            <div className="flex gap-3 items-center mb-5">
                <img className="w-14 h-14 rounded-full shadow-md shadow-primary-500/60" src={author_details.avatar_path ?? ImgDefault} alt="" />
                <div>
                    <p>{name}</p>
                    <small>Escrito el {dateFormat(now, "d 'de' mmmm 'del' yyyy")}</small>
                </div>
            </div>
            <p className='line-clamp-5 mb-2'>{content}</p>
            <small className='cursor-pointer transition-all hover:text-primary-100'>Ver review</small>
        </div>
    )
}
