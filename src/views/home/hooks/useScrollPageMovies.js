import { useEffect, useState } from "react";

export const useScrollPageMovies = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const handleScroll = () => {
        const totalScrolled = window.scrollY + window.innerHeight;
        const remainigScroll = document.body.scrollHeight - totalScrolled;

        if (remainigScroll > 80) return;

        setCurrentPage(currentPage + 1);
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => { window.removeEventListener('scroll', handleScroll) };

    }, [currentPage]);

    return { currentPage }
}

