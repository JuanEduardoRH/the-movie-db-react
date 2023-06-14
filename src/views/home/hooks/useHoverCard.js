import { useState } from "react";
import { getDetailMovie } from "../../../services/getDetailMovie";

export const useHoverCard = (id) => {

    const [detail, setDetail] = useState({});

    const handlerMouseEnter = async () => setDetail(await getDetailMovie(id));

    return { detail, handlerMouseEnter }
}
