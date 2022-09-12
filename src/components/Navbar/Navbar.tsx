/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { SetStateAction, useState } from 'react'
import { api } from '../../services/api'
import styles from './Navbar.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'



export const Navbar = () => {

  const route = useRouter()

  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    e.target.value = e.target.value.toLowerCase()
    setSearch(e.target.value)
  }

  const searchPokemon = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const response = await api.get(search)
    console.log(response)
    const pokemon = response.data
    const data = {
      id: pokemon.id,
      name: pokemon.name,
    }

    route.push(`/pokemons/${data.name}`)
    
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image width={50} height={50} src="/assets/pokeball.svg" alt="logo" />
      </div>
      <div className={styles.search}>
        <input type="search" placeholder="Search" onChange={handleChange} />
        <button type="submit" onClick={searchPokemon}>
          {' '}
          Search{' '}
        </button>
      </div>
      <ul className={styles.links}>
        <Link href="/">
          <a> Home </a>
        </Link>
        <Link href="/about">
          <a> About </a>
        </Link>
        <Link href="/favorites">
          <a>Favorites</a>
        </Link>
      </ul>
    </nav>
  )
}
