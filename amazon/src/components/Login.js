import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import "./Login.css"

function Login() {

    const history = useHistory()

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const login = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')

        })
        .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(e => alert(e.message))
        
    }

    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="logo" className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={login} className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
