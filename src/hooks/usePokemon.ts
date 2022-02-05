import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Pokemon } from 'types/Type'
import { pokemonAtom } from 'recoil/atoms/pokemonAtom'
import { pokemonSelector } from 'recoil/selectors/pokemonSelector'

export const usePokemon = (name: string): Pokemon => {
  const pokemon = useRecoilValue(pokemonSelector(name))
  const set = useSetRecoilState(pokemonAtom(name))
  useEffect(() => {
    if (pokemon) {
      set(pokemon)
    }
  }, [name, pokemon])
  return pokemon
}
