import { Language, Pokemon, PokemonList } from 'types/Type'

export const filterJa = <T extends { language: Language }>(
  entries: ReadonlyArray<T>
): ReadonlyArray<T> =>
  entries.filter(
    (i) => i.language.name === 'ja' || i.language.name === 'ja-Hrkt'
  )

export const fetchList = async (page: number): Promise<PokemonList> => {
  const offset = 10 * (page - 1)
  const apiUrl = `https://pokeapi.co/api/v2/pokemon-species/?limit=10&offset=${offset}`
  const result = await fetch(apiUrl).then(
    async (result) => (await result.json()) as PokemonList
  )
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(result)
    }, 1000)
  })
}

export const fetchPokemon = async (name: string): Promise<Pokemon> => {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon-species/${name}`
  const result = await fetch(apiUrl).then(async (result) => {
    const pm = (await result.json()) as Pokemon
    return {
      ...pm,
      flavor_text_entries: filterJa(pm.flavor_text_entries),
      genera: filterJa(pm.genera),
      names: filterJa(pm.names),
    }
  })
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(result)
    }, 1000)
  })
}
