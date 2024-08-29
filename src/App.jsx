import { useEffect, useState } from "react"
import Pokemon from "./components/Pokemon"

export default function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=4')
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }, [])
  
  return (
    <main>
      <header>PokeApi</header>
      <section>
        {pokemons.map(pokemon => {
          return <Pokemon key={pokemon.name} name={pokemon.name} />
        })}
      </section>
    </main>
  )
}