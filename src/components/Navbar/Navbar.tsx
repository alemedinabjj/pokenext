/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState } from 'react'
import { api } from '../../services/api'
import styles from './Navbar.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'

export const Navbar = () => {

  const route = useRouter()

  const [search, setSearch] = useState('')

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const searchPokemon = async e => {
    e.preventDefault()
    const response = await api.get(search)
    console.log(response)
    route.push(`/pokemons/${response.data.id}`)
  }


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image 
          width={50}
          height={50}
        src="/assets/pokeball.svg" alt="logo" />
      </div>
      <div className={styles.search}>
        <input type="search" placeholder="Search" onChange={handleChange} />
        <button type="submit" onClick={searchPokemon}> Search </button>
      </div>
      <ul className={styles.links}>
        <Link href="/">
          <a> Home </a>
        </Link>
        <Link href="/about">
          <a> About </a>
        </Link>
      </ul>
    </nav>
  )
}
