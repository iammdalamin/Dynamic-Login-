import { createContext, useEffect, useState } from "react";


const UserContext = createContext()

const UserProvider = ({ children }) => {
    const[state, setState] = useState({
        user:{},token:""
    })

    useEffect(() => {
        const getItem = JSON.parse(window.localStorage.getItem("Auth"))
        if (getItem) {
            setState({
                user: getItem.data,
                token:getItem.token
            }) 
        } else {
            setState(null)
        }
      

    },[])
    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}