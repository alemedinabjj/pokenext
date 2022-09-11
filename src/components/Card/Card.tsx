/* eslint-disable @next/next/no-img-element */
import styles from './Card.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { FavoriteContext, UseFavorite } from '../../hooks/FavoriteContext'
import { useContext } from 'react'

export const Card = ({ pokemon }) => {
  const { addFavorite, removeFavorite } = useContext(FavoriteContext)

  return (
    <div className={styles.container}>
      {pokemon.map(item => (
        <div key={item.id} className={styles.card}>
          <div className={styles.card__image}>
            <Image
              width={150}
              height={150}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
              alt={item.name}
            />
          </div>
          <div className={styles.card__info}>
            <h2>{item.name[0].toUpperCase() + item.name.slice(1)}</h2>
            <p>#{item.id}</p>

            <Link href={`/pokemons/${item.id}`}>
              <button>More Info</button>
            </Link>
          </div>
          <div className={styles.card__favorite}>
            <button onClick={() => addFavorite(item)}>Favoritar</button>
            <button onClick={() => removeFavorite(item)}>Remover</button>
          </div>
        </div>
      ))}
    </div>
  )
}
