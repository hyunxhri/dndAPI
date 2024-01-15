import "./RegisterForm.css"
import { RiAlertFill } from "react-icons/ri";
import { FaCheck, FaTimes } from "react-icons/fa";
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from "../LoginForm/LoginForm"

const RegisterForm = () => {

    const userRef = useRef()

    //Username must have at least 3 characters and password must have at least 8.
    const usernameRegex = /^[a-zA-Z0-9-_]{3,}$/
    const passwordRegex = /^[a-zA-Z0-9-_]{8,}$/

    const [username, setUsername] = useState('')
    const [validUsername, setValidUsername] = useState(false)
    const [userFocus, setusernameFocus] = useState(false)

    const [genre, setGenre] = useState('Masculine')
    const [role, setRole] = useState('Master')

    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const [confirmPassword, setConfirmPassword] = useState('')
    const [validConfirmPassword, setValidConfirmPassword] = useState(false)
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false)

    const favs = []

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false) 

    useEffect(() => {
        // Check if the username is valid.
        const result = usernameRegex.test(username)
        setValidUsername(result)
    }, [username])

    useEffect(() => {
        // Check if the password is valid and if the confirm password matches the password.
        const result = passwordRegex.test(password)
        setValidPassword(result)
        const matchResult = password === confirmPassword
        setValidConfirmPassword(matchResult)
    }, [password, confirmPassword])

    useEffect(() => {
        // Clear ErrMsg when username, password or confirm password is changed.
        setErrMsg('')
    }, [username, password, confirmPassword])

    const handleRegister = (e) => {
        e.preventDefault()
    
        // Check if the username is taken.
        const usersRegistered= JSON.parse(localStorage.getItem('Users')) || []
        const userExist = usersRegistered.find((u) => u.username === username)
        if (userExist) {
            setErrMsg("The username is already taken.")
            return
        }
    
        if (!validUsername || !validPassword) {
            setErrMsg("Invalid credentials.")
            return
        }
    
        // Update the users registered.
        const newUsers = [...usersRegistered, { username, password, genre, role, favs }]
    
        localStorage.setItem('Users', JSON.stringify(newUsers))
        // Clear the username and the password.
        setUsername('')
        setPassword('')
        setSuccess(true)
    }
    

    return (
        <>
            {success ? (
                <LoginForm/>
            ) : (
            <section className='flex-center login-register-section'>
                <form onSubmit={handleRegister} className='flex-center login-register-form height-620'>
                <h1 className="dragonhunter-f8f8ff">Register</h1>
                    <div>
                        <span className={validUsername ? "valid" : "offscreen"}>
                            <FaCheck className="icon"/>
                        </span>   
                        <span className={validUsername || !username ? "offscreen" : "invalid"}>
                            <FaTimes className="icon" />
                        </span>   
                        <input
                            type="text"
                            ref={userRef}
                            placeholder="Username"
                            className="tnw-f8f8ff"
                            onChange= {(e) => setUsername(e.target.value)}
                            aria-invalid = {validUsername ? false : true}
                            aria-describedby= "usernameNote"
                            onFocus= {() => setusernameFocus(true)}
                            onBlur= {() => setusernameFocus(false)}
                            required />
                        <p id="usernameNote" className={userFocus && !validUsername ? "instructions" : "offscreen"}>
                            <RiAlertFill />
                            At least 3 characters. <br/>
                            Only letters, numbers and underscores allowed.
                        </p>
                    </div>
                    <select 
                        className="tnw-f8f8ff"
                        id="genre"
                        onChange= {(e) => setGenre(e.target.value)}
                        name="genre"
                        required>
                            <option value="masculine">Masculine</option>
                            <option value="femenine">Femenine</option>
                            <option value="Other">Other</option>
                    </select>
                    <select
                        className="tnw-f8f8ff"
                        id="role"
                        onChange= {(e) => setRole(e.target.value)}
                        name="role"
                        required>
                            <option value="master">Master</option>
                            <option value="player">Player</option>
                            <option value="masterplayer">Master y player</option>
                    </select>
                    
                    <div>
                        <span className={validPassword ? "valid" : "offscreen"}>
                            <FaCheck className="icon"/>
                        </span>   
                        <span className={validPassword || !password ? "offscreen" : "invalid"}>
                            <FaTimes className="icon" />
                        </span>
                        <input
                            type="password"
                            placeholder="Password"
                            className="tnw-f8f8ff"
                            onChange= {(e) => setPassword(e.target.value)}
                            aria-invalid = {validPassword ? false : true}
                            aria-describedby= "passwordNote"
                            onFocus= {() => setPasswordFocus(true)}
                            onBlur= {() => setPasswordFocus(false)}
                            required />   
                        <p id="passwordNote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                            <RiAlertFill />
                            At least 8 characters. <br/>
                            Only letters, numbers and underscores allowed.
                        </p>
                    </div>

                    <div>
                        <span className={validConfirmPassword && confirmPassword ? "valid" : "offscreen"}>
                            <FaCheck className="icon" />
                        </span>   
                        <span className={validConfirmPassword || !confirmPassword ? "offscreen" : "invalid"}>
                            <FaTimes className="icon" />
                        </span>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="tnw-f8f8ff"
                            onChange= {(e) => setConfirmPassword(e.target.value)}
                            aria-invalid = {validConfirmPassword ? false : true}
                            aria-describedby= "confirmPasswordNote"
                            onFocus= {() => setConfirmPasswordFocus(true)}
                            onBlur= {() => setConfirmPasswordFocus(false)}
                            required />   
                        <p id="confirmPasswordNote" className={confirmPasswordFocus && !validConfirmPassword ? "instructions" : "offscreen"}>
                            <RiAlertFill />
                            The confirm password must match the password.
                        </p>
                    </div>
                    <p className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <button className={username && password && confirmPassword ? "dragonhunter-f8f8ff active-button" : "dragonhunter-f8f8ff"} disabled={!validUsername || !validPassword || !validConfirmPassword ? true : false}>Register</button>
                        <p>
                            <span className="tnw-f8f8ff">Already registered? <Link className='link' to="/login">Sign in</Link></span>
                        </p>
                        <p><Link className='link tnw-f8f8ff' to="/">Back to index</Link></p>

                </form>
            </section>
            )}
        </>
    )
    }

export default RegisterForm