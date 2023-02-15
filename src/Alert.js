import React from 'react'
import {FaCheck} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'

const Alert = ({ score,type })=> {


    // to show facheck icon when user gives correct answer
    if (type === 'success') {
        return (
            <div className='alert-success'>
                <FaCheck />
            </div>
        )
    }

    // to show imcross icon when user gives wrong answer
    else if (type === 'failure') {
        return (
            <div className='alert-failure'>
                <ImCross />
            </div>
        )
    }

    // to show score
    else {
        return (
            <div className='alert-none'>
                {score}
            </div>
        )
    }
}

export default Alert
