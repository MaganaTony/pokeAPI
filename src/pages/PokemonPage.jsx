import { useParams } from "react-router-dom";

export default function PokemonPage() {
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        data.name = capitalizeFirstLetter(data.name);
        setPokemon(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <></>;
}
