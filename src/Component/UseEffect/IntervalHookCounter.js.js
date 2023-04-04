import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count,setCount] = useState(0)
    // let pro = 'hey'
    
    let tick = ()=>{
      setCount(prev => prev + 1)
    }
    
    useEffect(()=>{
      let name1 = 'hey'
      let doSomething = ()=>{
        console.log(name1);
      }
      
      let interval = setInterval(tick,1000)
      
      return ()=>{
        clearInterval(interval)
        doSomething()
      }
    }, [])

  return (
    <div>
      <h1 >{count}</h1>
    </div>
  )
}

export default IntervalHookCounter