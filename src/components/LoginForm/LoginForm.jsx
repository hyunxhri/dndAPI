import React, { useState, useEffect, useRef } from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
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
        <section>
          <form onSubmit={handleLogin}>
            <p className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Login</h1>
              <FaUser className="icon" />
              <input 
                type="text"
                ref= {userRef}
                placeholder="Username"
                onChange = {(e) => setUsername(e.target.value)}
                value= {username}
                required/>
              <FaLock className="icon" />
              <input 
                type="password"
                placeholder="Password"
                onChange = {(e) => setPassword(e.target.value)}
                value= {password}
                required/>
            <button disabled={!username || !password}>Log in</button>
            <p>
              <span className="underFormText">Don't have an account? <Link to="/register">Register</Link></span>
            </p>
          </form>
        </section>
      )}
    </>
  )
}

export default LoginForm