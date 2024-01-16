import React, { useEffect, useState } from 'react'
import "./FavButton.css"

const FavButton = ({ itemDetails }) => {
  const [fav, setFav] = useState(false)
  const [userLogged, setUserLogged] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('UserLogged'))
    setUserLogged(user)
    if (user) {
      const isFav = user.favs.some((fav) => fav.index === itemDetails.index)
      setFav(isFav)
    }
  }, [itemDetails])

  const updateLocalStorageUser = (updatedFavs) => {
    // Update the user's favorites in local storage
    const updatedUser = { ...userLogged, favs: updatedFavs }
    localStorage.setItem('UserLogged', JSON.stringify(updatedUser))
  }

  const addItemToUserLoggedFavs = (item) => {
    if (userLogged) {
        const updatedFavs = [...userLogged.favs, item]
        updateLocalStorageUser(updatedFavs)
    } 
  }

  const removeItemFromUserLoggedFavs = (item) => {
    if (userLogged) {
        const updatedFavs = userLogged.favs.filter((fav) => fav.index !== item.index)
        updateLocalStorageUser(updatedFavs)
    } 
  }

  const handleFavButton = () => {
    fav
      ? (removeItemFromUserLoggedFavs(itemDetails), setFav(false))
      : (addItemToUserLoggedFavs(itemDetails), setFav(true))
  }

  return <button className={fav ? "buttonIsFav" : ""} disabled={!userLogged} onClick={handleFavButton}>{fav ? 'Remove from favs' : 'Add to favs'}</button>
}

export default FavButton
