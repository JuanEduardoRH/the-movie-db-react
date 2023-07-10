import { useId } from 'react';

import { Gallery, Item } from 'react-photoswipe-gallery'
import { useGallery } from '../hooks';

import config from '../../../utils/config';

import 'photoswipe/dist/photoswipe.css'
import '../styles/galleryMovie.css'

export const GalleryMovie = ({ id }) => {

    const { images, isLoading } = useGallery(id);

    return (
        <Gallery options={{
            showHideOpacity: true,
            showHideAnimationType: 'zoom'
        }} >
            <h2 className='text-white mb-10'>Imágenes</h2>
            <div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {images.map(({ file_path }) => <Item
                    key={useId()}
                    original={`${config.pathImg}/original/${file_path}`}
                    width="1024"
                    height="768"
                >
                    {({ ref, open }) => {
                        return <img ref={ref} className='rounded-lg cursor-pointer object-cover w-full h-full' onClick={open} src={`${config.pathImg}/w500${file_path}`} />
                    }}
                </Item>)}
            </div>
        </Gallery >
    );
}
