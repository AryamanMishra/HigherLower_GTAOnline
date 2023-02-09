import React from 'react'
import Home from './Home'
import GamePage from './GamePage'
import { useGlobalContext } from './context'


const App = ()=> {

	const { isGameActive } = useGlobalContext()
	return (
		<main>
			{isGameActive ? <GamePage /> : <Home />}
		</main>
	)
}
export default App
