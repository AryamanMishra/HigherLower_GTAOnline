import React from 'react'


const Cost = ({ cost,which })=> {
    return (
        <div className='cost-container'>
            <p>{cost}</p>
            <p>{which}</p>
        </div>
    )
}

export default Cost
