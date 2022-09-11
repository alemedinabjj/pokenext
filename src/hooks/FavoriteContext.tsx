import { createContext, useContext, useEffect, useState } from 'react'

interface FavoriteContextData {
  favorites: any[]
  addFavorite: (pokemon: any) => void
  removeFavorite: (pokemon: any) => void
}

export const FavoriteContext = createContext({} as FavoriteContextData)

export const UseFavorite = ({ children }) => {
  const [favorites, setFavorites] = useState<any>(
    () => typeof window !== 'undefined' && JSON.parse(localStorage.getItem('favorites')) || []
  )

  const addFavorite = pokemon => {
    if (favorites.some(item => item.id === pokemon.id)) {
      return
    }
    setFavorites([...favorites, pokemon])
  }

  const removeFavorite = pokemon => {
    const newFavorites = favorites.filter(item => item.id !== pokemon.id)
    setFavorites(newFavorites)
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    console.log(favorites)
  }, [favorites])


  
  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}
