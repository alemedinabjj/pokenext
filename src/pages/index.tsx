import { useContext, useState } from 'react'
import { Card } from '../components/Card/Card'
import { FavoriteContext } from '../hooks/FavoriteContext'
import { api } from '../services/api'

export async function getStaticProps() {
  const maxPokemons = 300

  const res = await api.get(`?limit=${maxPokemons}`)

  const pokemons = res.data.results

  pokemons.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

export default function Home({ pokemons }) {

  const { favorites  } = useContext(FavoriteContext)

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>PokeNext</h1>
      {
        favorites.length > 0 && (
          <div style={{ textAlign: 'center' }}>
            {favorites.length} pokemons favoritos
          </div>
        )
      }
      <div>
        <Card pokemon={pokemons} />
      </div>
    </>
  )
}
