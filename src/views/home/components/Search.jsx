import { Input } from '../../../components';
import { CardList } from '../../../components';
import { useSearch } from '../hooks';

export const Search = () => {

    const {
        inputSearch,
        isSearching,
        listMovies,
        handleInputSearch,
        handleIsOpenSearch,
    } = useSearch();


    const htmlSearching = () => {
        if (isSearching) return <Searching />
        if (!isSearching && !listMovies.length) return <ResultNotFound />
    }

    return (
        <div className='relative'>
            <form className="d-flex">
                <Input className='input-searcher'
                    type='search'
                    placeholder='Search'
                    onClick={handleIsOpenSearch}
                    onChange={handleInputSearch}
                    value={inputSearch}
                />
            </form>

            <div className={`search-results max-h-96 overflow-y-scroll transition-all z-20 mt-2 p-4 d-block rounded shadow-lg bg-white absolute w-full ${inputSearch.length ? 'opacity-100 visible' : 'opacity-0 invisible]'}`}>
                {htmlSearching()}
                <div className={`search-results flex flex-col gap-4 transition-all ${listMovies.length ? 'opacity-100 visible' : 'opacity-0 invisible'}`} >
                    {listMovies.map(movie => <CardList key={movie.id} movie={movie} />)}
                </div>
            </div>
        </div >
    )
}

const ResultNotFound = () => {
    return <p className='text-center mb-0'>No hay resultados</p>;
}

const Searching = () => {
    return (
        <div className="content-searching active">
            <div className="spinner-border spinner-border-sm text-secondary" role="status"></div>
            <label className='ps-2'>Buscando peliculas...</label>
        </div>
    );
}