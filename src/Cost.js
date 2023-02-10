import React from 'react'
import PropTypes from 'prop-types'

const Cost = ({ cost,which })=> {
    return (
        <div className='cost-container'>
            <p>{cost}</p>
        </div>
    )
}

export default Cost
