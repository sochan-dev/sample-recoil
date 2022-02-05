import React, { VFC } from 'react'
import Link from 'next/link'
import { usePokemonList } from 'hooks/usePokemonList'

type Props = {
  page: number
}

export const Pagination: VFC<Props> = (props) => {
  const { page } = props
  const pokemonList = usePokemonList(page)

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {page > 1 ? <Link href={`?page=${page - 1}`}>&lt;&lt; 前へ</Link> : null}
      &nbsp;&nbsp;&nbsp;
      {pokemonList.next ? (
        <Link href={`?page=${page + 1}`}>次へ&gt;&gt;</Link>
      ) : null}
    </div>
  )
}
