import React from 'react'
import {FaCheck} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'

const Alert = ({ score,type })=> {

    if (type === 'success') {
        return (
            <div className='alert-success'>
                <FaCheck />
            </div>
        )
    }
    else if (type === 'failure') {
        return (
            <div className='alert-failure'>
                <ImCross />
            </div>
        )
    }
    else {
        return (
            <div className='alert-none'>
                {score}
            </div>
        )
    }
}

export default Alert
