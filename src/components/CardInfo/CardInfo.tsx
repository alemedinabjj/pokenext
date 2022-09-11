/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useContext } from 'react'
import { FavoriteContext } from '../../hooks/FavoriteContext'
import styles from './CardInfo.module.scss'

export const CardInfo = ({ pokemon }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoriteContext)

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <Image
              width={250}
              height={250}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt={pokemon.name}
            />
          </div>
          <div className={styles.card__info}>
            <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
            <p>#{pokemon.id}</p>
            <p>Weight: {pokemon.weight / 10} kg</p>
            <p>
              Height:{' '}
              {pokemon.height / 10 > 1
                ? `${pokemon.height / 10} m`
                : `${pokemon.height / 10} cm`}
            </p>

            <p>
              Abilities:{' '}
              {pokemon.abilities.map(item => (
                <span key={item.ability.name}>
                  {item.ability.name[0].toUpperCase() +
                    item.ability.name.slice(1)}{' '}
                </span>
              ))}
            </p>
            <p>
              Types:{' '}
              {pokemon.types.map(item => (
                <span key={item.type.name}>
                  {item.type.name[0].toUpperCase() + item.type.name.slice(1)}{' '}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className={styles.card__favorite}>
          <button
            style={{
              display: favorites.find(favorite => favorite.id === pokemon.id)
                ? 'none'
                : 'inline'
            }}
            onClick={() => addFavorite(pokemon)}
          >
            Favoritar
          </button>
          <button
            style={{
              display: favorites.find(favorite => favorite.id === pokemon.id)
                ? 'inline'
                : 'none'
            }}
            onClick={() => removeFavorite(pokemon)}
          >
            Remover
          </button>
        </div>
      </div>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  )
}
