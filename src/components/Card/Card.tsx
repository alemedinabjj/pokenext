/* eslint-disable @next/next/no-img-element */
import styles from './Card.module.scss'

export const Card = ({ pokemon }) => {


  return (
    <div className={styles.container}>
      {
        pokemon.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.card__image}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`} alt={item.name} />
            </div>
            <div className={styles.card__info}>
              <h2>{item.name[0].toUpperCase() + item.name.slice(1)}</h2>
              <p>#{item.id}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}