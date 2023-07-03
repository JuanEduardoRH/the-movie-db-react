import { useState } from "react";
import { getMovies } from "../../../services";

let timeout;

export const useSearch = () => {

    const [inputSearch, setInputSearch] = useState('');
    const [isSearching, setIsSearching] = useState(true);
    const [listMovies, setListMovies] = useState([]);
    const [isOpenSearchContainer, setIsOpenSearchContainer] = useState(false);

    /***
     * 
     * En dado que el usuario se encuentre escribiendo dentro del input
     * limpiaremos las variables asociadas, y agregaremos un delay a la busqueda,
     * esto nos permitira esperar hasta que termine de escribir en un tiempo determinado,
     * posteriormente se realizara la busqueda
     * 
     ***/

    const handleInputSearch = async (e) => {

        const value = e.target.value.trim();

        setListMovies([]);
        setInputSearch(value);
        setIsSearching(true);

        clearTimeout(timeout);

        await new Promise(resolve => {
            timeout = setTimeout(() => resolve(), 400);
        });

        if (!value) return setListMovies([]);

        setListMovies(await getMovies(value));
        setIsSearching(false);
    }

    /***
     * 
     * En dado que el usuario haga click fuera del elemento, entonces limpiamos
     * las variables asociadas al buscados
     * 
     ***/

    const handleOutsideClick = (event) => {
        const searchResult = event.target.closest('.search-results');

        if (searchResult || event.target.classList.contains('input-searcher')) return;

        setIsOpenSearchContainer(false);
        setListMovies([]);
        setInputSearch('');

        document.removeEventListener('click', handleOutsideClick);
    }

    /***
     * 
     * En dado que el usuario haga click dentro del elemento
     * entonces ajustamos el estado del hook para montar el componente
     * 
     ***/

    const handleIsOpenSearch = (e) => {

        if (isOpenSearchContainer) return;

        setIsOpenSearchContainer(true);

        document.addEventListener('click', handleOutsideClick);
    }

    return {
        inputSearch, setInputSearch,
        isSearching, setIsSearching,
        listMovies, setListMovies,
        isOpenSearchContainer, setIsOpenSearchContainer,
        handleInputSearch,
        handleOutsideClick,
        handleIsOpenSearch,
    }
}
