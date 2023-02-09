import React from 'react'
import { useGlobalContext } from './context'

const Home = ()=> {

	const {openGame} = useGlobalContext()
	return (
		<div className='home-page'>
			<h1>higher or lower <span>GTA Online</span></h1>
			<button onClick={openGame}>Play</button>
		</div>
	)
}

export default Home
