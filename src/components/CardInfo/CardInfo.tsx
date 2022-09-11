/* eslint-disable @next/next/no-img-element */
import styles from './CardInfo.module.scss'

export const CardInfo = ({ pokemon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img
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
    </div>
  )
}
