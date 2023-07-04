import { NowPlaying, Trending, Search, SwiperPopular } from './components';


export const Home = () => {
    return (
        <>
            <SwiperPopular />
            <div className='container grid grid-cols-8 gap-10 px-2 sm:px-4 mx-auto pt-2 pb-5 '>
                {/* <div className='pb-5'>
                    <h2 className='text-primary text-2xl sm:text-4xl font-bold pb-5'>Busca tu pelicula</h2>
                    <Search />
                </div> */}
                <NowPlaying />
                <Trending />
            </div>
        </>
    )
}

