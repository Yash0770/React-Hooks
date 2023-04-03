import React, { useState } from 'react'

function CountTwo() {
    let initialCount = 0;
    const [ count, setCount] = useState(initialCount)

    let incrementFive = ()=>{
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount+1)
        }
    }
  return (
    <div>
        <h2>

      Count : {count}                                   
        </h2>
      <button type='button' onClick={()=> setCount(initialCount) }>Reset</button>               {/* using Prev value to initialize */}
      <button type='button' onClick={()=> setCount(prevCount => prevCount + 1) }>Increment</button>
      <button type='button' onClick={()=> setCount(prevCount => prevCount>0? prevCount - 1 : 0) }>Decrement</button>
      <button type='button' onClick={ incrementFive }>Increment 5</button>
      {/* <button type='button' onClick={()=> setCount(prevCount => prevCount+10) }>Increment +10</button> */}
    

    </div>
  )
}

export default CountTwo
