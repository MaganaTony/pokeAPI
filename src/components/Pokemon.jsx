import { useEffect, useState } from "react"

export default function Pokemon({ name }) {
    const [pokemon, setPokemon] = useState({})

    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((data) => {
                data.name = capitalizeFirstLetter(data.name)
                setPokemon(data)                
            })
            .catch(error => {
                console.error('Error:', error)
            })
    }, [])    


    return (
        <article className="bg-zinc-700 border border-white/60 flex flex-col items-center p-2 rounded-lg gap-2">
            <h2 className="font-bold bg-slate-900/80 w-full text-center rounded-lg my-2" >{pokemon.name}</h2>
            <img className="size-14" src={pokemon.sprites?.other["official-artwork"]?.front_default} alt={pokemon.name} />
        </article>
    )
}