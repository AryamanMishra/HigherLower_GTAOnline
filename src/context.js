import React, { useContext,useState } from "react"


const AppContext = React.createContext()

const AppProvider = ({ children })=> {

    const [isGameActive,setIsGameActive] = useState(false)

    const openGame = ()=> {
        setIsGameActive(true)
    }
    const closeGame = ()=> {
        setIsGameActive(false)
    }
    return (
        <AppContext.Provider
            value={{
                isGameActive,
                openGame,
                closeGame
            }}    
        >
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export {AppContext,AppProvider}