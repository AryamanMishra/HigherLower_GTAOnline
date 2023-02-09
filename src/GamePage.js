import React,{useEffect, useState} from 'react'
import Alert from './Alert'
import {weapons_data} from './data'

const GamePage = ()=> {

	const [image1,setImage1] = useState({})
	const [image2,setImage2] = useState({})
	const [score,setScore] = useState(0)
	const [alert,setAlert] = useState({type:'none'})


	
	useEffect(()=> {
		const shuffled = weapons_data.sort(() => 0.5 - Math.random());
		let selected = shuffled.slice(0, 2);
		setImage1(selected[0])
		setImage2(selected[1])
	},[])



	const checkAndCompareFirst = ()=> {
		let price1 = image1.cost
		let price2 = image2.cost
		if (price1 > price2) {
			setAlert({type:'success'})
			setTimeout(()=> {
				setAlert({type:'none'})
			},3000)
			setScore(score+1)
		}
		else {
			setAlert({type:'failure'})
			setTimeout(()=> {
				setAlert({type:'none'})
			},3000)
		}
	}

	const checkAndCompareSecond = ()=> {
		let price1 = image1.cost
		let price2 = image2.cost
		if (price1 < price2) {
			setTimeout(()=> {
				setAlert({type:'success'})
			},2800)
			setScore(score+1)
		}
		else {
			setAlert({type:'failure'})
			setTimeout(()=> {
				setAlert({type:'none'})
			},2800)
		}
	}

	return (
		<>
			<div className='game-title'>
					<h2>which one is costlier??</h2>
			</div>
			<div className='game-page'>	
				<div className='first-image'>
					<button onClick={()=>checkAndCompareFirst()}>
						<img src={image1.img} alt="" />
						<h3>{image1.name}</h3>
						<p hidden>{image1.cost}</p>
					</button>
				</div>
				<Alert score={score} {...alert} />
				<div className='second-image'>
					<button onClick={()=>checkAndCompareSecond()}>
						<img src={image2.img} alt="" />
						<h3>{image2.name}</h3>
						<p hidden>{image2.cost}</p>
					</button>
				</div>
			</div>
		</>
	)
}

export default GamePage
