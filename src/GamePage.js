import React,{useEffect, useState} from 'react'
import {weapons_data} from './data'

const GamePage = ()=> {

	const [image1,setImage1] = useState({})
	const [image2,setImage2] = useState({})
	useEffect(()=> {
		const shuffled = weapons_data.sort(() => 0.5 - Math.random());
		let selected = shuffled.slice(0, 2);
		setImage1(selected[0])
		setImage2(selected[1])
	},[])

	return (
		<>
			<div className='game-title'>
					<h2>which one is costlier??</h2>
			</div>
			<div className='game-page'>	
				<div className='first-image'>
					<button>
						<img src={image1.img} alt="" />
						<h3>{image1.name}</h3>
						{/* <p>{image1.cost}</p> */}
					</button>
				</div>
				<div className='second-image'>
					<button>
						<img src={image2.img} alt="" />
						<h3>{image2.name}</h3>
						{/* <p>{image2.cost}</p> */}
					</button>
				</div>
			</div>
		</>
	)
}

export default GamePage
