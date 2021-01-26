import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

export default function Signup({ history }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
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
            const response = await fetch("http://localhost:1337/auth/local/register", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
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
    }

    return (
        <div className= "signup">
            <h2>Signup</h2>



            <form onSubmit={handleSubmit}>
                <label >Username: </label>
                <input type="text" value={username} onChange={(event) => {
                    setError('')
                    setUsername(event.target.value)
                }} />
                <br></br>
                <label >Email: </label>
                <input type="email" value={email} onChange={(event) => {
                    setError('')
                    setEmail(event.target.value)
                }} />
                <br></br>
                <label >Password: </label>
                <input type="password" value={password} onChange={(event) => {
                    setError('')
                    setPassword(event.target.value)
                }} />
                <br></br>
                <button>Signup</button>

            </form>

            {error && <p>{error}</p>}

        </div>
    )
}
