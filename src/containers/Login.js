import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import index from '../index.css'
export default function Login({ history }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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
        try {
            const response = await fetch("http://localhost:1337/auth/local", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    identifier: username,
                    password
                })
            })
            const data = await response.json()
            console.log("data", data)

            if (data.message) {
                setError(data.message[0].messages[0].message)
                return
            }
            setUser(data)

        } catch (err) {
            setError('Something Wrong ' + err)
        }
    }

    return (
        <div className="login uk-flex uk-flex-column uk-container">
            <form class="uk-form" onSubmit={handleSubmit}>
                <fieldset data-uk-margin>
                    <legend className="uk-text-lead">Login</legend>
                    <div className="uk-form-row uk-flex uk-flex-center ">
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
                                <label>Password</label> </p>
                            <input
                                className="uk-form-width-large textbox"
                                type="password"
                                value={password}
                                onChange={(event) => {
                                    setError('')
                                    setPassword(event.target.value)
                                }} />
                        </div>


                    </div>
                    <button class="uk-button uk-align-center">Login</button>
                </fieldset>
            </form>















            {error && <p>{error}</p>}

        </div>
    )
}
