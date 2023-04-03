import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count,setCount] = useState(0)

    let tick = ()=>{
      setCount(prev => prev + 1)
    }

    useEffect(()=>{
      let interval = setInterval(tick,1000)

      return ()=>{
        clearInterval(interval)
      }
    }, [])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default IntervalHookCounter