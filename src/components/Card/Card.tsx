/* eslint-disable @next/next/no-img-element */
import styles from './Card.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { FavoriteContext, UseFavorite } from '../../hooks/FavoriteContext'
import { useContext, useState } from 'react'

export const Card = ({ pokemon }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoriteContext)


  return (
    <div className={styles.container}>
      {pokemon.map(item => (
        <div
          key={item.id}
          className={`${styles.card}
        ${
          favorites.some(favorite => favorite.id === item.id) && styles.favorite
        }`}
        >
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
            <button
              style={{
                display: favorites.find(favorite => favorite.id === item.id)
                  ? 'none'
                  : 'inline'
              }}
              onClick={() => addFavorite(item)}
            >
              Favoritar
            </button>
            <button
              style={{
                display: favorites.find(favorite => favorite.id === item.id)
                  ? 'inline'
                  : 'none'
              }}
              onClick={() => removeFavorite(item)}
            >
              Remover
            </button>
          </div>
        </div>
      ))}
     
    </div>
  )
}
