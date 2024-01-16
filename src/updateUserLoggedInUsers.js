const updateUserLoggedInUsers = () => {
  // Save information of UserLogged in Users.
  const users = JSON.parse(localStorage.getItem('Users'))
  const userLogged = JSON.parse(localStorage.getItem('UserLogged'))
  if(users && userLogged){
    const updatedUsers = users.map(user => (user.username === userLogged.username ? { ...user, ...userLogged } : user))
    localStorage.setItem('Users', JSON.stringify(updatedUsers))
  }
}

export default updateUserLoggedInUsers
