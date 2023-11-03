// React
import { createContext, useEffect, useState } from "react"

// Types
import { User } from "../../pages/page-content/header/components/user/User.types"

// User photo - temporarily
import profilePhoto from '../images/profile-photos/Profile.png'



interface UserContextProps {
    user: User
    setUser: (user: User) => void
}

const UserContext = createContext<UserContextProps>({
    user: { firstName: '', lastName: '', email: '', photo: '', status: '' },
    setUser: () => null
})

interface UserProviderProps {
    children: React.ReactElement
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>({ firstName: '', lastName: '', email: '', photo: '', status: '' })

    useEffect(() => {

        setUser({
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com',
            photo: profilePhoto,
            status: 'Online'
        })
    }, [])

    const value = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
