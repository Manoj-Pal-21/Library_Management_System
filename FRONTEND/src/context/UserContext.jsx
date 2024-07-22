import React, {createContext, useContext, useState} from "react"

const UserContext = createContext();

const initialState = {
    role: null
}

export const UserProvider = ({children}) => {
    const [isAdminVal, setIsAdminVal] = useState(initialState);

    const setRole = (role) => {
        setIsAdminVal({...isAdminVal, role: role})
    }

    return (
        <UserContext.Provider value={{isAdminVal, setRole}}>
            {children}
        </UserContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(UserContext);
}
