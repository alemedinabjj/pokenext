import { useContext, useEffect } from "react"
import { Card } from "../components/Card/Card"
import { FavoriteContext } from "../hooks/FavoriteContext"




export default function Favorites () {  
  const { favorites, removeFavorite } = useContext(FavoriteContext)

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])


  console.log(favorites)

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Favorites</h1>
      <Card pokemon={favorites} />
    </div>
  )
}