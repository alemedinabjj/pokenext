/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from 'next'
import { CardInfo } from '../../components/CardInfo/CardInfo'
import { api } from '../../services/api'

export const getStaticPaths: GetStaticPaths = async () => {
  const maxPokemons = 898

  const res = await api.get(`?limit=${maxPokemons}`)

  const pokemons = res.data.results

  const paths = pokemons.map((pokemon, index) => {
    return {
      params: { id: (index + 1).toString() }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params

  const res = await api.get(`${id}`)

  const pokemon = res.data


  return {
    props: {
      pokemon
    }
  }
}

export default function Pokemon({ pokemon }) {
  return (
    <CardInfo pokemon={pokemon} />
  )
}
