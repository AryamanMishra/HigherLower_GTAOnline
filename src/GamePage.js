import React,{useEffect, useState} from 'react'
import Alert from './Alert'
import { useGlobalContext } from './context'
import Cost from './Cost'
import {weapons_data} from './data'
import GameOverModal from './GameOverModal'



// let score = localStorage.getItem('score');
// let isGameActive = localStorage.getItem('isGameActive');

// if (gameObject === null) {
// 	gameObject = {isGameActive:true,score:0}
// }
// else {
// 	gameObject = JSON.parse(localStorage.getItem('gameObject'))
// }



// shows gamepage
const GamePage = ()=> {
	
	// state variables for both the images [this object contains name,img,cost as keys]
	const [image1,setImage1] = useState({})
	const [image2,setImage2] = useState({})
	// state variables for both the images [this object contains name,img,cost as keys]


	// fetching required variables and methods from global context
	const {score,increaseScore,closeGame} = useGlobalContext()


	// alert to show score or green tick mark if answer is correct or red cross if answer is wrong 
	const [alert,setAlert] = useState({type:'none'})


	// fetching gameovermodal from glocal context
	const {showGameOverModal,openGameOverModal} = useGlobalContext()
	const [showCost,setShowCost] = useState(false)
	const [cost1,setCost1] = useState(0)
	const [cost2,setCost2] = useState(0)



	// fetching is isGameActive from global context
	const {isGameActive} = useGlobalContext()



	// converting cost to int after replacing all the special characters with "" 
	const StringToIntCost = (cost) =>{

		if (cost === 'FREE') {
			cost = 0
			return cost
		}
		cost = cost.replace(/[^0-9 ]/g, "")
		cost = parseInt(cost)
		return cost
	}
	
	

	// useEffect to fetch 2 random images from weapons data
	useEffect(()=> {


		/* the function content is same in both conditions except the delay */

		// this part runs when user first starts the game or restarts the game after loosing
		// this part has low delay to render both images quickly when the app is started or the game is restarted
		if (localStorage.getItem('score') === null || score === 0) {
			setTimeout(()=> {
				const shuffled = weapons_data.sort(() => 0.5 - Math.random());
				let selected = shuffled.slice(0, 2);
	
				// set state variables to the random images
				setImage1(selected[0])
				setImage2(selected[1])
				setCost1(selected[0].cost)
				setCost2(selected[1].cost)
				// set state variables to the random images
	
				// saving the score to localstorage
				localStorage.setItem('score', score)
	
				// saving isGameActive to localstorage
				localStorage.setItem('isGameActive', JSON.stringify (isGameActive))
			},300)
		}



		// this part runs between a correct response and new images being rendered after that response
		// this part has higher delay to show cost of the previous items for an appropriate interval 
		// and to properly display new images after previous response
		else {
			setTimeout(()=> {
				const shuffled = weapons_data.sort(() => 0.5 - Math.random());
				let selected = shuffled.slice(0, 2);
	
				// set state variables to the random images
				setImage1(selected[0])
				setImage2(selected[1])
				setCost1(selected[0].cost)
				setCost2(selected[1].cost)
				// set state variables to the random images
	
				// saving the score to localstorage
				localStorage.setItem('score', score)
	
				// saving isGameActive to localstorage
				localStorage.setItem('isGameActive', JSON.stringify (isGameActive))
			},1100)
		}
		
		
	},[score,isGameActive]) // runs only when score updates




	// checking if the user choosen image is the correct answer
	// which variable basically checks if the user chose first image or the second image
	const checkAndCompare = (which)=> {
		let price1 = image1.cost
		let price2 = image2.cost

		// converting cost to int to compare them
		price1 = StringToIntCost(price1)
		price2 = StringToIntCost(price2)
		

		// if user chose first image as their answer
		if (which === 'first') {

			// correct answer
			if (price1 > price2) {

				// show cost after response
				setShowCost(true)

				// show correct answer icon after 400ms delay
				setTimeout(()=> {
					setAlert({type:'success'}) // correct answer alert
					increaseScore() // increase score by 1
				},400)
				

				// hide cost after 1.5s delay
				setTimeout(()=> {
					setShowCost(false)
				},1500)
				

				// show the score again 
				setTimeout(()=> {
					setAlert({type:'none'})	
				},1500)
			}


			// incorrect answer
			else {

				// show cost after response
				setShowCost(true)

				// show incorrect answer icon after 400ms delay
				setTimeout(()=> {
					setAlert({type:'failure'}) // incorrect answer alert
				},400)


				// hide cost after 1s delay
				setTimeout(()=> {
					setShowCost(false)
				},1200)


				// show game over prompt
				setTimeout(()=> {
					setAlert({type:'none'})

					openGameOverModal(true) // show game over modal
				},1200)
			}
		}


		// if user chose second image as their answer
		else if (which === 'second') {

			// correct answer
			if (price2 > price1) {
				setShowCost(true)

				setTimeout(()=> {
					// correct answer alert
					setAlert({type:'success'})

					// increase score by 1
					increaseScore()
				},400)
				

				setTimeout(()=> {
					setShowCost(false)
				},1500)

				// show the score again after 1.5s
				setTimeout(()=> {
					setAlert({type:'none'})	
				},1500)
			}

			// incorrect answer
			else {
				setShowCost(true)
				// incorrect answer alert
				setTimeout(()=> {

					// incorrect answer alert
					setAlert({type:'failure'})
				},400)

				setTimeout(()=> {
					setShowCost(false)
				},1200)

				// show the score again after 1s
				setTimeout(()=> {
					setAlert({type:'none'})

					// show game over modal
					openGameOverModal(true)
				},1200)
			}
		}
	}


	

 	// at the top showing a title
	// then the .game-page class contains both the images
	// the image div contains image,its name,its cost(hidden initially)
	// the alert is always rendered either showing the score,green correct answer icon or red wrong answer icon
	// gameovermodal is rendered conditionally based on showGameOverModal value
	// at the bottom the button redirects the user to home page is they want to close the game in between
	return (
		<>
			<div className='game-title'>
					<h2>which costs more??</h2>
			</div>
			<div className='game-page'>	
				<div className='first-image'>
					<button onClick={()=>checkAndCompare('first')}>
						<img src={image1.img} alt="" />
						<h3>{image1.name}</h3>
						{showCost && <Cost cost={cost1} which='first'/>}
					</button>
				</div>
				<Alert score={score} {...alert} />
				{ showGameOverModal && <GameOverModal score={score} />}
				<div className='second-image'>
					<button onClick={()=>checkAndCompare('second')}>
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
