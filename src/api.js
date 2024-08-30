const pokeapiURL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemonList(limit = 50) {
  const response = await fetch(`${pokeapiURL}?limit=${limit}`);
  const responseJson = await response.json();
  return responseJson.results;
}

export async function getPokemonbyName(name) {
  const response = await fetch(`${pokeapiURL}/${name}`);
  const responseJson = await response.json();
  return responseJson;
}
