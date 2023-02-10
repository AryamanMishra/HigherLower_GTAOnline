import React,{useEffect, useState} from 'react'
import Alert from './Alert'
import { useGlobalContext } from './context'
import Cost from './Cost'
import {weapons_data} from './data'
import GameOverModal from './GameOverModal'



const getLocalStorage = ()=> {
	let gameObject = localStorage.getItem('gameObject')
	if (!gameObject) {
		return {isGameActive:false,image1:{name:'',img:'',cost:0},image2:{name:'',img:'',cost:0},score:0}
	}
	else {
		return JSON.parse(localStorage.getItem('gameObject'))
	}
}



const GamePage = ()=> {
	
	const gameObject = getLocalStorage()
	const [image1,setImage1] = useState(gameObject.image1)
	const [image2,setImage2] = useState(gameObject.image2)
	const {score,increaseScore,closeGame} = useGlobalContext()
	const [alert,setAlert] = useState({type:'none'})
	const {showGameOverModal,openGameOverModal} = useGlobalContext()
	const [showCost,setShowCost] = useState(false)
	const [cost1,setCost1] = useState(gameObject.image1.cost)
	const [cost2,setCost2] = useState(gameObject.image2.cost)
	const {isGameActive} = useGlobalContext()

	const StringToIntCost = (cost) =>{
		cost = cost.replace(/[^0-9 ]/g, "")
		cost = parseInt(cost)
		return cost
	}
	
	
	useEffect(()=> {
		setTimeout(()=> {
			const shuffled = weapons_data.sort(() => 0.5 - Math.random());
			let selected = shuffled.slice(0, 2);
			setImage1(selected[0])
			setImage2(selected[1])
			setCost1(selected[0].cost)
			setCost2(selected[1].cost)
			localStorage.setItem('gameObject', JSON.stringify({isGameActive,image1,image2,score}))
		},600)
		
	},[score])



	const checkAndCompareFirst = ()=> {
		let price1 = image1.cost
		let price2 = image2.cost
		price1 = StringToIntCost(price1)
		price2 = StringToIntCost(price2)
		
		if (price1 > price2) {
			setAlert({type:'success'})
			setTimeout(()=> {
				setAlert({type:'none'})
			},1100)
			setShowCost(false)
			increaseScore()
		}
		else {
			setAlert({type:'failure'})
			setTimeout(()=> {
				setAlert({type:'none'})
				openGameOverModal(true)
			},1000)
		}
	}

	const checkAndCompareSecond = ()=> {
		let price1 = image1.cost
		let price2 = image2.cost
		price1 = StringToIntCost(price1)
		price2 = StringToIntCost(price2)
		if (price1 < price2) {
			setAlert({type:'success'})
			setTimeout(()=> {
				setAlert({type:'none'})
			},1100)
			setShowCost(false)
			increaseScore()
		}
		else {
			setAlert({type:'failure'})
			setTimeout(()=> {
				setAlert({type:'none'})
				openGameOverModal(true)
			},1000)
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
						{showCost && <Cost cost={cost1} which='first'/>}
					</button>
				</div>
				<Alert score={score} {...alert} />
				{ showGameOverModal && <GameOverModal score={score} />}
				<div className='second-image'>
					<button onClick={()=>checkAndCompareSecond()}>
						<img src={image2.img} alt="" />
						<h3>{image2.name}</h3>
						{showCost && <Cost cost={cost2} which='second'/>}
					</button>
				</div>
			</div>
			<div className='closeGame-gamepage'>
				<button onClick={closeGame}>Go to Home Page</button>
			</div>
		</>
	)
}

export default GamePage
