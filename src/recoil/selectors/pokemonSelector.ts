import { DefaultValue, selectorFamily } from 'recoil'
import { Pokemon } from 'types/Type'
import { pokemonAtom } from '../atoms/pokemonAtom'
import { fetchPokemon } from 'utils/pokemon-api'

export const pokemonSelector = selectorFamily<Pokemon, string>({
  key: 'components.pokemon.pokemonSelector',
  get:
    (name) =>
    async ({ get }) => {
      return get(pokemonAtom(name)) || (await fetchPokemon(name))
    },
})
