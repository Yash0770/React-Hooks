import React, { useState } from 'react'

function Hooks() {
    const [count, setCount] = useState(null)

    let buttonClick = ()=>{
        setCount(count+1)
    }
  return (
    <div>
      <h1>Hey {count}</h1>

      <button type='button' onClick={buttonClick}>Click</button>
    </div>
  )
}

export default Hooks
