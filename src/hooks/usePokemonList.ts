import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState, DefaultValue } from 'recoil'
import { PokemonList } from 'types/Type'
import { pokemonListAtom } from 'recoil/atoms/pokemonListAtom'
import { pokemonListSelector } from 'recoil/selectors/pokemonListSelector'

export const usePokemonList = (page: number): PokemonList => {
  const pokemonList = useRecoilValue(pokemonListSelector(page))

  const set = useSetRecoilState(pokemonListAtom(page))

  useEffect(() => {
    if (pokemonList) {
      set(pokemonList)
    }
  }, [pokemonList])

  return pokemonList
}
