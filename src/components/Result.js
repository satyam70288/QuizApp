import React from 'react'
import '../style/Result.css'
import { Link } from 'react-router-dom'
const Result = () => {
    const onRestart=()=>{
        console.log("on Restart")

    }
  return (
    <div className='container'> 
    <h1 className='title text-light'> QUIZ APPLICATION </h1>
    <div className='result flex-center'>
        <div className='flex' >
            <span>username</span>
            <span className='bold'>Daily tution</span>

        </div>
        <div className='flex' >
            <span>Total Quiz Points:</span>
            <span className='bold'>50</span>

        </div>
        <div className='flex' >
            <span>Total Question:</span>
            <span className='bold'>05</span>

        </div>
        <div className='flex' >
            <span>Total Attempts:</span>
            <span className='bold'>03</span>

        </div>
        <div className='flex' >
            <span>Total Earn points:</span>
            <span className='bold'>30</span>

        </div>
        <div className='flex' >
            <span> Quiz Result:</span>
            <span className='bold'>Passed</span>

        </div>

    </div>
    <div className='start'>
        <Link className='btn' to={'/'} onClick={onRestart}>Restart
        </Link>
    </div>
  </div>
  )
}

export default Result