import React from 'react'
import Home from './Home'
import GamePage from './GamePage'
import { useGlobalContext } from './context'


const App = ()=> {

	// state variable to check if game is active or not
	const { isGameActive } = useGlobalContext()

	// if active render game page or else home page
	return (
		<main>
			<div className='main-body'> 
				{isGameActive ? <GamePage /> : <Home />}
			</div>
		</main>
	)
}
export default App
