import { DefaultValue, selectorFamily } from 'recoil'
import { PokemonList } from 'types/Type'
import { pokemonListAtom } from '../atoms/pokemonListAtom'
import { fetchList } from 'utils/pokemon-api'

export const pokemonListSelector = selectorFamily<PokemonList, number>({
  key: 'components.pokemon.pokemonListSelector',
  get:
    (page) =>
    async ({ get }) => {
      console.log(`get(pokemonListAton(page)->${get(pokemonListAtom(page))})`)
      get(pokemonListAtom(page))
        ? console.log('ある！')
        : console.log('ない！！！')
      return get(pokemonListAtom(page)) || (await fetchList(page))
    },
  set:
    () =>
    async ({ set }, value) => {
      if (value instanceof DefaultValue) console.log('qQQq')
      console.log('not')
    },
})

/**
 *
 * &&の場合は、
 * 全体がfalseの時にfalseの式が評価
 * 全体がtrueの時に右の式が評価
 *
 * ||の場合は、
 * trueの場合は評価された式が帰ってくる
 *
 *
 */
