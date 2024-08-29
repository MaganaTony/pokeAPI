import { useEffect, useState } from "react"
import Pokemon from "./components/Pokemon"

export default function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }, [])
  
  return (
    <main className="p-4">
      <header className="w-full text-center mb-4 font-bold bg-amber-600 p-1">PokeApi</header>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
        {pokemons.map(pokemon => {
          return <Pokemon key={pokemon.name} name={pokemon.name} />
        })}
      </section>
    </main>
  )
}