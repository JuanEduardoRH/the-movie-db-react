import { Card } from "../../../components"
import config from "../../../utils/config"
import ImgDefault from '../../../images/image-not-found.png'
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export const RecommendationMovieSlide = ({ id, poster_path, title }) => {

    const queryClient = useQueryClient();

    const image = poster_path ? `${config.pathImg}/w500${poster_path}` : ImgDefault;

    const navigate = useNavigate();

    const click = () => {
        navigate(`/${id}`, {
            state: {
                refetch: true
            }
        });
        // navigate(`/210763`);
        // queryClient.invalidateQueries({ queryKey: ['detail-movie', id] });
        queryClient.refetchQueries({ queryKey: ['detail-movie', id] });
    }

    return (
        <Card path={image} className="h-full" onClick={click} />
    )
}
