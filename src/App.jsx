import RegisterForm  from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LadingPage/LandingPage'
import Data from './components/Data/Data'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/classes" element={<Data endpoint="classes"/>}/>
        <Route path="/races" element={<Data endpoint="races"/>}/>
        <Route path="/spells" element={<Data endpoint="spells"/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
