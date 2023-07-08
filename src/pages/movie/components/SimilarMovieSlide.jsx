import { Card } from "../../../components"
import config from "../../../utils/config"

export const SimilarMovieSlide = ({ poster_path, title }) => {
    console.log(title)
    return (
        <Card path={`${config.pathImg}/original/${poster_path}`} />
    )
}
