export const SimplePagination = ({ pagination: { current_page, next_page_url }, onNext, onPrev }) => {

    const toggleClassDisabled = (position) => {

        if (position == 'prev' && current_page == 1) {
            return 'text-gray-200 opacity-60 cursor-not-allowed'
        }

        if (position == 'prev' && current_page > 1) {
            return 'cursor-pointer'
        }

        if (position == 'next' && !next_page_url) {
            return 'text-gray-200 opacity-60 cursor-not-allowed'
        }

        if (position == 'next' && next_page_url) {
            return 'cursor-pointer'
        }
    }

    const onClickPrev = (e) => {
        e.preventDefault();

        if (current_page == 1) return;

        onPrev();
    }

    const onClickNext = (e) => {
        e.preventDefault();

        if (!next_page_url) return;

        onNext();
    }

    return (
        <div className="flex justify-center items-center mt-4" >
            <ul className="pagination flex items-center gap-4">
                <li onClick={onClickPrev} className={`py-2 px-3 active ${toggleClassDisabled('prev')}`}><i className="bi bi-arrow-left-short flex"></i></li>
                <li onClick={onClickNext} className={`py-2 px-3 active ${toggleClassDisabled('next')}`}><i className="bi bi-arrow-right-short flex"></i></li>
            </ul>
        </div >
    )
}
