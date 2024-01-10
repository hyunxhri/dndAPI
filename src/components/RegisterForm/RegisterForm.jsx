import "./RegisterForm.css"
import { RiAlertFill } from "react-icons/ri";
import { FaCheck, FaTimes } from "react-icons/fa";
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {

    const userRef = useRef()

    //Username must have at least 3 characters and password must have at least 8.
    const usernameRegex = /^[a-zA-Z0-9-_]{3,}$/
    const passwordRegex = /^[a-zA-Z0-9-_]{8,}$/

    const [username, setUsername] = useState('')
    const [validUsername, setValidUsername] = useState(false)
    const [userFocus, setusernameFocus] = useState(false)

    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)


    const [confirmPassword, setConfirmPassword] = useState('')
    const [validConfirmPassword, setValidConfirmPassword] = useState(false)
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false) 

    useEffect(() => {
        // The fields username is focused.
        userRef.current.focus()
        }, [])

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
        const newUsers = [...usersRegistered, { username, password }]
    
        localStorage.setItem('Users', JSON.stringify(newUsers))
        // Clear the username and the password.
        setUsername('')
        setPassword('')
        setSuccess(true)
    }
    

    return (
        <>
            {success ? (
                <section>
                    <h3>You have been registered</h3>
                    <p>
                        <Link to="/login">Sign in</Link>
                    </p>
                </section>
            ) : (
            <section>
                <p className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <span className={validUsername ? "valid" : "hide"}>
                        <FaCheck/>
                    </span>   
                    <span className={validUsername || !username ? "hide" : "invalid"}>
                        <FaTimes />
                    </span>   
                    <input
                        type="text"
                        ref={userRef}
                        placeholder="Username"
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

                    <span className={validPassword ? "valid" : "hide"}>
                        <FaCheck/>
                    </span>   
                    <span className={validPassword || !password ? "hide" : "invalid"}>
                        <FaTimes />
                    </span>
                    <input
                        type="password"
                        placeholder="Password"
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

                    <span className={validConfirmPassword && confirmPassword ? "valid" : "hide"}>
                        <FaCheck/>
                    </span>   
                    <span className={validConfirmPassword || !confirmPassword ? "hide" : "invalid"}>
                        <FaTimes />
                    </span>
                    <input
                        type="password"
                        placeholder="Confirm password"
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
                    <button disabled={!validUsername || !validPassword || !validConfirmPassword ? true : false}>Register</button>
                </form>
                <p>
                    <span className="underFormText">Already registered? <Link to="/login">Sign in</Link></span>
                </p>
            </section>
            )}
        </>
    )
    }

export default RegisterForm