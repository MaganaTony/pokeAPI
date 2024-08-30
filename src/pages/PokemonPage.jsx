import { useParams } from "react-router-dom";
import { getPokemonbyName } from "../api";
import { useEffect, useState } from "react";

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  useEffect(() => {
    getPokemonbyName(name)
      .then((data) =>  setPokemon(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <article className="bg-zinc-700 border max-w-md border-white/60 flex flex-col items-center p-2 h-64 rounded-lg gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group hover:bg-gradient-to-r hover:from-blue-500 hover:to-yellow-500">
    <h2 className="font-bold w-full text-center rounded-lg my-2 bg-slate-900/80 capitalize">
      {pokemon.name}
    </h2>
    <img
      className="size-36 ease-in-out transition-transform duration-150 my-auto group-hover:scale-150 "
      src={pokemon.sprites?.other["official-artwork"]?.front_default}
      alt={pokemon.name}
    />
    <section className="flex flex-col">
        <span>{pokemon.height}</span>
        <span>{pokemon.weight}</span>
    </section>
    <section>
        {pokemon.types?.map(type => <span>{type.type.name}</span>)}
    </section>
  </article>
  )
}
