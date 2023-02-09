import React from 'react'
import Home from './Home'
import GamePage from './GamePage'
import { useGlobalContext } from './context'


const App = ()=> {

	const { isGameActive } = useGlobalContext()
	return (
		<main>
			<div className='main-body'>
				{isGameActive ? <GamePage /> : <Home />}
			</div>
		</main>
	)
}
export default App
