import { atomFamily } from 'recoil'
import { Pokemon } from 'types/Type'

export const pokemonAtom = atomFamily<Pokemon | null, string>({
  key: 'components.pokemon.pokemonAtom',
  default: null,
})
