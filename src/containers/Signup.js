import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

export default function Signup({ history }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const { user, setUser } = useContext(UserContext)
    console.log("user", user)

    useEffect(() => {
        if (user) {
            history.push('/')
        }
    }, [user])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password === confirmPassword)
            try {
                const response = await fetch("http://localhost:1337/auth/local/register", {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                        confirmPassword
                    })
                })
                const data = await response.json()
                console.log("data", data)

                if (data.message) {
                    setError(data.data[0].messages[0].message)
                    return
                }
                setUser(data)

            } catch (err) {
                setError('Something Wrong ' + err)
            }
        else {
            setError('Passwords do not match. Please try again.')
        }
    }

    return (
        <div className="signup">
            <div className="login uk-flex uk-flex-column uk-container">
                <form class="uk-form" onSubmit={handleSubmit}>
                    <fieldset data-uk-margin>
                        <legend className="uk-text-lead">Sign Up</legend>
                        <div className="uk-form-row uk-flex uk-flex-center">
                            <div>
                                <p className="uk-margin-large-right uk-flex-center uk-text-large">
                                    <label>Username</label></p>
                                <input
                                    type="text"
                                    value={username}
                                    className="uk-form-width-large textbox"
                                    onChange={(event) => {
                                        setError('')
                                        setUsername(event.target.value)
                                    }} />
                                <p className="uk-margin-large-right uk-text-large">
                                    <label>Email</label></p>
                                <input
                                    className="uk-form-width-large textbox"
                                    type="email"
                                    value={email}
                                    onChange={(event) => {
                                        setError('')
                                        setEmail(event.target.value)
                                    }} />
                                <p className="uk-margin-large-right uk-text-large">
                                    <label>Password</label> </p>
                                <input
                                    className="uk-form-width-large textbox"
                                    type="password"
                                    value={password}
                                    onChange={(event) => {
                                        setError('')
                                        setPassword(event.target.value)
                                    }} /><p className="uk-margin-large-right uk-text-large">
                                    <label>Confirm Password</label> </p>
                                <input
                                    className="uk-form-width-large textbox"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(event) => {
                                        setError('')
                                        setConfirmPassword(event.target.value)
                                    }} />
                            </div>
                        </div>
                        <button class="uk-button uk-align-center">Sign up</button>
                    </fieldset>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}
