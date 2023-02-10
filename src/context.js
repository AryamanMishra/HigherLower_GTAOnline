import React, { useContext,useState } from "react"


const AppContext = React.createContext()



let score = localStorage.getItem('score');
let isGameActive = localStorage.getItem('isGameActive');
let activeGame = isGameActive === null ? false : true;
let prevScore = score === null ? 0 : score



const AppProvider = ({ children })=> {

    let [score,setScore] = useState(prevScore)
    const [isGameActive,setIsGameActive] = useState(activeGame)
    const [showGameOverModal,setShowGameOverModal] = useState(false)



    const decideScore = (score)=> {
        setScore(score)
    }
    const increaseScore = ()=> {
        if (typeof score === 'string') {
            score = parseInt(score)
            setScore(score+1)
        }
        else 
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