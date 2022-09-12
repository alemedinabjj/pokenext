import { useContext, useState, useEffect, useCallback } from 'react'
import { Card } from '../components/Card/Card'
import { FavoriteContext } from '../hooks/FavoriteContext'
import { api } from '../services/api'

export async function getStaticProps() {
  const maxPokemons = 50

  const res = await api.get(`?limit=${maxPokemons}`)

  const pokemons = res.data.results

  pokemons.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons
    },
  }
}

export default function Home({ pokemons }) {

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Pokemons</h1>
      <div>
        <Card pokemon={pokemons} />
      </div>
    </>
  )
}
