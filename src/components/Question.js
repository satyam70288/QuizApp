import React, { useEffect } from 'react'
import data from '../database/data'
const Question = () => {
    const question=data[0];
    const onSelect=()=>{
        console.log("question")
    }
    useEffect(()=>{
        console.log(data)
           })
  return (
    <div className='questions'>
    <h2 className='text-light'>{question.question} </h2>
    <ul key={question.id}>
       {
        question.options.map((q,i)=>(
            <li key={i}>
            <input
                 type="radio"
                 value="true"
                 name="question"
                 id={`q${i}-option`}
                 onChange={onSelect()}

            />
            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
            <div className='check '>{console.log(`q${i}-option`)}
 </div>
        </li>
        ))
       }
    </ul>
    </div>
  )
}

export default Question