import { useState } from 'react'
import { Card } from '../components/Card/Card'
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

  return (
    <>
      <h1 style={{ textAlign: "center" }}>PokeNext</h1>
    <div>
      <Card pokemon={pokemons} />
    </div>
    </>
  )
}
