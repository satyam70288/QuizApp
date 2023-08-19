import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Question from './Question'

const Quize = () => {
  const onPrev=()=>{
    console.log("on Prev click")
  }

  const onNext=()=>{
    console.log("on next click")
  }
  return(
  <div className='container'> 
    <h1 className='title text-light'> QUIZ APPLICATION </h1>
    {/* display question */}

    <Question/>
    
    <div className='grid'>
      <button className='btn prev'onClick={onPrev}>Prev</button>
      <button className='btn next' onClick={onNext}>Next</button>
      
    </div>
  </div>
 )
 
}

export default Quize