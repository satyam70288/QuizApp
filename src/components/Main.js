import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import '../style/Main.css'
const Main = () => {
    const inputRef=useRef(null)
  return (
    <div className='container'>
    <h1 className='title text-light'>QUIZ APPLICATION</h1>
    <ol>
      <li> you will be asked 10 question one after another</li>
      <li> 10 points is awarded for the correct answer</li>
      <li> Each question hs three option.you can choose only one option</li>
      <li> you can review and change answer before quiz finish</li>
      <li> the result will be declared at the end of quiz</li>
    </ol>
    <form id="form" >
      <input  ref={inputRef} className="userid" type="text" placeholder='username'/>
    </form>
    <div className='start'>
   <Link className='btn' to={'quiz'}> start quiz </Link>

    </div>
  </div>

  )
}

export default Main