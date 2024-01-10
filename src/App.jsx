import RegisterForm  from './components/RegisterForm/RegisterForm'
import LoginForm from './components/LoginForm/LoginForm'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function sidebar() {
  return(
    <sidebar>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </sidebar>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
