import React from 'react'


// show costs
const Cost = ({ cost,which })=> {
    return (
        <div className='cost-container'>
            <p>{cost}</p>
            <p>{which}</p>
        </div>
    )
}

export default Cost
