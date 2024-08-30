import { useParams } from "react-router-dom";

export default function PokemonPage() {
    const { name } = useParams();

    return (
        <h1 className="text-4xl text-center font-bold text-white">
            {name}
        </h1>
    );
}
