import { useParams } from "react-router-dom";
import { getPokemonbyName } from "../api";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Pokemon from "../components/Pokemon";
import { useNavigate } from "react-router-dom";

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getPokemonbyName(name)
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!pokemon.name) {
    return (
      <>
        <header className="w-full flex rounded-full justify-center mb-4 font-bold bg-amber-600 p-1">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="PokeApi"
          />
        </header>
        <main className="w-screen h-screen flex items-center justify-center font-bold text-red-500">
          POKEMON NOT FOUND
        </main>
      </>
    );
  }

  return (
    <>
      <header 
      onClick={() => navigate(`/`)}
      className="w-full flex rounded-full justify-center mb-4 font-bold bg-amber-600 p-1">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeApi"
        />
      </header>
      <Pokemon key={pokemon.name} name={pokemon.name} />
    </>
  );
}
