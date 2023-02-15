import React, { useContext,useState } from "react"


// creating global context
const AppContext = React.createContext()


// fetching score and isGameActive stored in localstorage
let score = localStorage.getItem('score');
let isGameActive = localStorage.getItem('isGameActive');
// fetching score and isGameActive stored in localstorage


// if isGameActive is present in localstorage set activeGame to true or else false
let activeGame = isGameActive === null ? false : true;


// if score is present in localstorage set score to 0 or else score
let prevScore = score === null ? 0 : score



// making an AppProvider component to make a global context for App component
const AppProvider = ({ children })=> {


    // setting score state variable based on localstorage value
    let [score,setScore] = useState(prevScore)
    const [isGameActive,setIsGameActive] = useState(activeGame)
    // setting score state variable based on localstorage value

    
    // game over prompt
    const [showGameOverModal,setShowGameOverModal] = useState(false)



    // set the score to a particular value
    const decideScore = (score)=> {
        setScore(score)
    }


    // increase the score
    const increaseScore = ()=> {

        // parsing score to int 
        if (typeof score === 'string') {
            score = parseInt(score)
            setScore(score+1)
        }
        else 
            setScore(score+1)
    }


    // starts the game
    const openGame = ()=> {
        setIsGameActive(true)
    }


    // ends the game
    const closeGame = ()=> {
        setIsGameActive(false)
        setShowGameOverModal(false)
        localStorage.clear()
        decideScore(0)
    }


    // show gameover prompt
    const openGameOverModal = ()=> {
        setShowGameOverModal(true)
    }


    // close gameover prompt
    const closeGameOverModal = ()=> {
        setShowGameOverModal(false)
    }


    // restart game if user chooses restart in gameover prompt
    const restartGame = ()=> {
        decideScore(0)

        // delayed close modal so that images can load in the background
        setTimeout(()=> {
            setShowGameOverModal(false)
        },300)
    }


    // returning all the functions,variables as props of AppContext.Provider
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


// setting up globalcontext
export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export {AppContext,AppProvider}