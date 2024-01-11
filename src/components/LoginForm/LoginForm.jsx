import React, { useState, useEffect, useRef } from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'

const LoginForm = () => {

  const userRef = useRef(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    // The fields username is focused.
    userRef.current.focus()
  }, [])

  useEffect(() => {
    // Clear ErrMsg when username or password is changed.
    setErrMsg('')
  }, [username, password])

  const handleLogin = (e) => {
    e.preventDefault()
    const usersRegistered= JSON.parse(localStorage.getItem('Users')) || []
    const userExist = usersRegistered.find((u) => u.username === username && u.password === password)
    if (!userExist) {
        setErrMsg("Invalid credentials.")
        return
    }
    setUsername('')
    setPassword('')
    setSuccess(true)
  }


  return (
    <>
      {success ? (
          <section>
              <h3>You have been logged</h3>
              <p>
                  <Link to="/">Home</Link>
              </p>
          </section>
      ) : (
        <section className='flex-center login-register-section'>
          <form onSubmit={handleLogin} className='flex-center login-register-form'>
            <h1 className='dragonhunter-f8f8ff'>Login</h1>
            <div>
                <input 
                  type="text"
                  ref= {userRef}
                  className="wonderwold-f8f8ff"
                  placeholder="Username"
                  onChange = {(e) => setUsername(e.target.value)}
                  value= {username}
                  required/>
            </div>
            <div>
              <input 
                type="password"
                className="wonderwold-f8f8ff"
                placeholder="Password"
                onChange = {(e) => setPassword(e.target.value)}
                value= {password}
                required/>
            </div>
            <p className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <button className={username && password ? "dragonhunter-f8f8ff active-button" : "dragonhunter-f8f8ff"} disabled={!username || !password}>Log in</button>
            <p>
              <span className="wonderwold-f8f8ff">Don't have an account? <Link className='link' to="/register">Register</Link></span>
            </p>
          </form>
        </section>
      )}
    </>
  )
}

export default LoginForm