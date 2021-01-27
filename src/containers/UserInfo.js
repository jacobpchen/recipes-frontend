import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Moment from 'react-moment'

export default function UserInfo() {

    const { user } = useContext(UserContext)

    console.log(user)

    return (
        <div className="uk-container">
            <h2> Profile </h2>
            <div> <label >Username: </label> {user.user.username} </div>
            <div> <label >Email: </label> {user.user.email} </div>
            <div> <label >Date Created: </label> {<Moment format="MMM Do YYYY">{user.user.created_at}</Moment>}</div>
        </div>
    )
}