import { Card } from "../../../components"
import config from "../../../utils/config"
import ImgDefault from '../../../images/image-not-found.png'

export const SimilarMovieSlide = ({ poster_path, title }) => {
    const image = poster_path ? `${config.pathImg}/w500${poster_path}` : ImgDefault;
    return (
        <Card path={image} className="h-full" />
    )
}
