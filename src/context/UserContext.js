import React, { createContext, useState } from 'react'

export const UserContext = createContext(null)

export default ({ children }) => {

    const [user, setUser] = useState(null)
    console.log("INSIDE CONTEXT - USERCONTEXT")
    console.log(user)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}