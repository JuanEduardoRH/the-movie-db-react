import { NumericFormat } from "react-number-format"
import { useKeywords } from "../hooks";

export const AsideInfo = ({ id, title, status, spoken_languages, budget, revenue }) => {

    const { data, isLoading } = useKeywords(id);

    return (
        <div className="w-60 h-96 text-white">
            <div className="mb-4">
                <strong className="block font-medium">Título original</strong>
                <small>{title}</small>
            </div>
            <div className="mb-4">
                <strong className="block font-medium">Estado</strong>
                <small>{status}</small>
            </div>
            <div className="mb-4">
                <strong className="block font-medium">Idioma original</strong>
                <small>{spoken_languages[0].name}</small>
            </div>
            <div className="mb-4">
                <strong className="block font-medium">Presupuesto</strong>
                <small><NumericFormat prefix={'$'} displayType="text" value={budget} thousandSeparator="." decimalSeparator="," /></small>
            </div>
            <div className="mb-4">
                <strong className="block font-medium">Ingresos</strong>
                <small><NumericFormat prefix={'$'} displayType="text" value={revenue} thousandSeparator="." decimalSeparator="," /></small>
            </div>
            <div className="mb-4">
                <strong className="block font-medium pb-2">Palabras clave</strong>
                <div className="flex flex-wrap gap-2">
                    {data.map(keyword => <Keyword key={keyword.id} {...keyword} />)}
                </div>
            </div>
        </div>
    )
}

const Keyword = ({ name }) => {
    return (
        <small className="bg-gray-500 px-2 rounded-sm leading-2">{name}</small>
    );
}
