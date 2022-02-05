import React, { useState, VFC } from 'react'
import { usePokemonList } from 'hooks/usePokemonList'
import { ListItem } from 'components/molecules/ListItem'

type Props = {
  page: number
}

export const List: VFC<Props> = (props) => {
  const { page } = props
  const pokemonList = usePokemonList(page)
  const [selected, select] = useState('')
  return (
    <div>
      {pokemonList.results.map((item, idx) => (
        <div key={idx} style={{ margin: '1em 0' }}>
          {item.name === selected ? (
            <>
              <div
                style={{ backgroundColor: '#666', color: 'white' }}
                onClick={() => select('')}
              >
                {item.name}
              </div>
              <React.Suspense fallback={<>....</>}>
                <ListItem name={item.name} />
              </React.Suspense>
            </>
          ) : (
            <div
              style={{
                cursor: 'pointer',
                backgroundColor: '#666',
                color: 'white',
              }}
              onClick={() => select(item.name)}
            >
              {item.name}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
