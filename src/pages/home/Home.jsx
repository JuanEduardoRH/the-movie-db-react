import { NowPlaying, Search, SwiperPopular } from './components';


export const Home = () => {
    return (
        <>
            <SwiperPopular />
            <div className='container px-2 sm:px-4 mx-auto pt-2'>
                {/* <div className='pb-5'>
                    <h2 className='text-primary text-2xl sm:text-4xl font-bold pb-5'>Busca tu pelicula</h2>
                    <Search />
                </div> */}
                <NowPlaying />
            </div>
        </>
    )
}

