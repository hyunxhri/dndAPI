import RegisterForm  from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LadingPage/LandingPage'
import Data from './components/Data/Data'
import SpellsPage from './components/SpellsPage/SpellsPage'
import Profile from './components/Profile/Profile'

function App() {
  const updateUserLoggedInUsers = () => {
    // Save information of UserLogged in Users.
    const users = JSON.parse(localStorage.getItem('Users'))
    const userLogged = JSON.parse(localStorage.getItem('UserLogged'))
    if(users & userLogged){
      const updatedUsers = users.map(user => (user.username === userLogged.username ? { ...user, ...userLogged } : user))
      localStorage.setItem('Users', JSON.stringify(updatedUsers))
    }
}

setInterval(() => {
    updateUserLoggedInUsers()
}, 60000)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/classes" element={<Data endpoint="classes"/>}/>
        <Route path="/races" element={<Data endpoint="races"/>}/>
        <Route path="/spells" element={<SpellsPage endpoint="spells"/>} />
        <Route path="/spells/bard" element={<SpellsPage endpoint="classes/bard/spells"/>} />
        <Route path="/spells/cleric" element={<SpellsPage endpoint="classes/cleric/spells"/>} />
        <Route path="/spells/druid" element={<SpellsPage endpoint="classes/druid/spells"/>} />
        <Route path="/spells/paladin" element={<SpellsPage endpoint="classes/paladin/spells"/>} />
        <Route path="/spells/ranger" element={<SpellsPage endpoint="classes/ranger/spells"/>} />
        <Route path="/spells/sorcerer" element={<SpellsPage endpoint="classes/sorcerer/spells"/>} />
        <Route path="/spells/warlock" element={<SpellsPage endpoint="classes/warlock/spells"/>} />
        <Route path="/spells/wizard" element={<SpellsPage endpoint="classes/wizard/spells"/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
