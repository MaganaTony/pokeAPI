import { useEffect, useState } from "react"

export default function Pokemon({ name }) {
    const [pokemon, setPokemon] = useState({})
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data)
            })
            .catch(error => {
                console.error('Error:', error)
            })
    }, [])
    
    return (
        <article className="bg-zinc-700 border">
            <h2>{pokemon.name}</h2>
            <img className="size-14" src={pokemon.sprites?.other["official-artwork"]?.front_default} alt={pokemon.name} />
        </article>
    )
}