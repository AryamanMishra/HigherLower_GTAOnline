import React from 'react'
import { useGlobalContext } from './context'


// shows game over prompt
const GameOverModal = ({score})=> {


    // fetching the variable from global context
    const {showGameOverModal,restartGame,closeGame} = useGlobalContext()
    return (

        // change css classname depending on whether the modal is hidden or visible

        // 2 options namely restart game and go to home page is shown
        <div className = {`${showGameOverModal ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className='modal-container'>
                <h3>Your Score</h3>
                <p>{score}</p>
                <div className='modal-btn-container'>
                    <button onClick={restartGame}>Restart?</button> 
                    <button onClick={closeGame}>Go to Home Page</button>
                </div>
            </div>
        </div>
    )
}

export default GameOverModal
