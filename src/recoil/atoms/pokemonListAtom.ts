import { atomFamily } from 'recoil'
import { PokemonList } from 'types/Type'

export const pokemonListAtom = atomFamily<PokemonList | null, number>({
  key: 'components.pokemon.pokemonListAtom',
  default: null,
})
