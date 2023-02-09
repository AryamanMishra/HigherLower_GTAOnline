import React from 'react'
import { useGlobalContext } from './context'

const Home = ()=> {

	const {openGame} = useGlobalContext()
	return (
		<div className='home-section'>
			<div className="title">
				<h1>higher or lower <span>GTA Online</span></h1>
			</div>
			<button onClick={openGame}  className='start-btn'>Play</button>
		</div>
	)
}

export default Home
