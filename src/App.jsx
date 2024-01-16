import RegisterForm  from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Data from './Data'
import SpellsPage from './SpellsPage'
import Profile from './Profile'
import LandingPage from './LandingPage'
import Contact from './Contact'
import updateUserLoggedInUsers from './updateUserLoggedInUsers'

function App() {

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
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
