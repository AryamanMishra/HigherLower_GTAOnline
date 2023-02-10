import React from 'react'
import { useGlobalContext } from './context'


const GameOverModal = ({score})=> {

    const {showGameOverModal,restartGame,closeGame} = useGlobalContext()
    return (
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
