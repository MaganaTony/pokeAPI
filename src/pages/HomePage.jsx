import { useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";
import { getPokemonList } from "../api";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonList()
      .then((pokemonListResponse) => {
        setPokemons(pokemonListResponse);
      })
      .catch((error) => {
        console.error("Fetch pokemon rror:", error);
      });
  }, []);

  return (
    <main className="p-4">
      <header className="w-full flex rounded-full justify-center mb-4 font-bold bg-amber-600 p-1">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokeApi"
        />
      </header>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
        {pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.name} name={pokemon.name} />;
        })}
      </section>
    </main>
  );
}
