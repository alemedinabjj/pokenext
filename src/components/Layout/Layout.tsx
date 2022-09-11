/* eslint-disable react/no-children-prop */
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"

import Head from "next/head"
import styles from './Layout.module.scss'

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <meta name="description" content="Pokedex Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  )
}