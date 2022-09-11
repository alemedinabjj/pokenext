import Link from 'next/link'
import styles from './Navbar.module.scss'


export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
       <img src="/assets/pokeball.svg" alt="logo" />
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
