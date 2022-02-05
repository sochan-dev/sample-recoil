import React, { VFC } from 'react'
import { usePokemon } from 'hooks/usePokemon'

type Props = {
  name: string
}

export const ListItem: VFC<Props> = (props) => {
  const { name } = props
  const pokemon = usePokemon(name)
  console.log(pokemon)

  return pokemon ? (
    <div style={{ border: '1px solid gray' }}>
      <div>{pokemon.names[0].name}</div>
      <div>{pokemon.genera[0]?.genus}</div>
      <pre>{pokemon.flavor_text_entries[0].flavor_text}</pre>
    </div>
  ) : null
}
