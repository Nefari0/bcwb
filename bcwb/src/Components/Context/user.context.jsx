import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener,signOutUser } from '../../base'

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) =>{
            if (user != null) {setCurrentUser(user)}
        })

        return unsubscribe
    },[])

    const [currentUser, setCurrentUser ] = useState(null)
    const value = { currentUser,setCurrentUser };
    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}