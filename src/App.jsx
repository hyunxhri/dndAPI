import RegisterForm  from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Data from './Data'
import SpellsPage from './SpellsPage'
import Profile from './Profile'
import LandingPage from './LandingPage'
import Contact from './Contact'
import updateUserLoggedInUsers from './updateUserLoggedInUsers'
import { path } from './env/env'

function App() {

  setInterval(() => {
    updateUserLoggedInUsers()
  }, 60000)

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${path}`} element={<LandingPage/>} />
        <Route path={`${path}classes`} element={<Data endpoint="classes"/>}/>
        <Route path={`${path}races`} element={<Data endpoint="races"/>}/>
        <Route path={`${path}spells`} element={<SpellsPage endpoint="spells"/>} />
        <Route path={`${path}spells/bard`} element={<SpellsPage endpoint="classes/bard/spells"/>} />
        <Route path={`${path}spells/cleric`} element={<SpellsPage endpoint="classes/cleric/spells"/>} />
        <Route path={`${path}spells/druid`} element={<SpellsPage endpoint="classes/druid/spells"/>} />
        <Route path={`${path}spells/paladin`} element={<SpellsPage endpoint="classes/paladin/spells"/>} />
        <Route path={`${path}spells/ranger`} element={<SpellsPage endpoint="classes/ranger/spells"/>} />
        <Route path={`${path}spells/sorcerer`} element={<SpellsPage endpoint="classes/sorcerer/spells"/>} />
        <Route path={`${path}spells/warlock`} element={<SpellsPage endpoint="classes/warlock/spells"/>} />
        <Route path={`${path}spells/wizard`} element={<SpellsPage endpoint="classes/wizard/spells"/>} />
        <Route path={`${path}profile`} element={<Profile/>} />
        <Route path={`${path}contact`} element={<Contact/>} />
        <Route path={`${path}register`} element={<RegisterForm />} />
        <Route path={`${path}login`} element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
