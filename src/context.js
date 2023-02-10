import React, { useContext,useState } from "react"


const AppContext = React.createContext()



let gameObject = localStorage.getItem('gameObject');
let activeGame = gameObject == null ? false : true;




const AppProvider = ({ children })=> {

    const [score,setScore] = useState(0)
    const [isGameActive,setIsGameActive] = useState(activeGame)
    const [showGameOverModal,setShowGameOverModal] = useState(false)



    const decideScore = (score)=> {
        setScore(score)
    }
    const increaseScore = ()=> {
        setScore(score+1)
    }

    const openGame = ()=> {
        setIsGameActive(true)
    }

    const closeGame = ()=> {
        setIsGameActive(false)
        setShowGameOverModal(false)
        decideScore(0)
    }

    const openGameOverModal = ()=> {
        setShowGameOverModal(true)
    }

    const closeGameOverModal = ()=> {
        setShowGameOverModal(false)
    }

    const restartGame = ()=> {
        decideScore(0)
        setTimeout(()=> {
            setShowGameOverModal(false)
        },250)
    }

    return (
        <AppContext.Provider
            value={{
                score,
                increaseScore,
                isGameActive,
                openGame,
                closeGame,
                showGameOverModal,
                openGameOverModal,
                closeGameOverModal,
                restartGame,
                decideScore
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