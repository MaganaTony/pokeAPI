import { useEffect, useState } from "react";
import { getPokemonbyName } from "../api";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export default function Pokemon({ name }) {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemonbyName(name)
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <article
    onClick={() => navigate(`/pokemon/${name}`)}
      className={clsx(
        "bg-zinc-700 border border-white/60 flex flex-col",
        "items-center p-2 h-64 rounded-lg gap-2 transform transition-all duration-300",
        "hover:scale-105 hover:shadow-xl group hover:bg-gradient-to-r hover:from-blue-500 hover:to-yellow-500"
      )}
    >
      <a
        className="font-bold w-full text-center rounded-lg my-2 bg-slate-900/80 capitalize"
        href={`/pokemon/${name}`}
      >
        {name}
      </a>
      <img
        className="size-36 ease-in-out transition-transform duration-150 my-auto group-hover:scale-150 "
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt={pokemon.name}
      />
    </article>
  );
}
