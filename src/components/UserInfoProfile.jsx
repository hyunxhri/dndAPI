import React from 'react'

const userInfoProfile = ({ user }) => {
  return (
    <div className='userInfoProfile'>
        <ul>
        <li>{user.username}</li>
        <li>{user.genre}</li>
        <li>{user.role}</li>
        <li>Favs : {user.favs.length}</li>
        </ul>
    </div>
  )
}

export default userInfoProfile