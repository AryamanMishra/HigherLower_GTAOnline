import React from 'react'
import { useGlobalContext } from './context'
import {FaGithubSquare} from 'react-icons/fa'

const Home = ()=> {

	const {openGame} = useGlobalContext()
	return (
		<>
			<div className='home-section'>
				<div className="title">
					<h1>higher or lower <span>GTA Online</span></h1>
				</div>
				<button onClick={openGame}  className='start-btn'>Play</button>
			</div>
			<div className='footer'>
				<button className='github-button'>
					<a href="https://github.com/AryamanMishra/HigherLower_GTAOnline" target='_blank' rel="noreferrer">
						<FaGithubSquare />
					</a>
					
				</button>
			</div>
		</>
	)
}

export default Home
