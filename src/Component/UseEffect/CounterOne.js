import React, {useEffect, useState} from 'react'

function CounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log('Updationg title');
        //ternary operator
        
        document.title = `You clicked ${count} times`
    },[count])
  return (
    <div>
        <input type="text" value={name}
        onChange={e => setName(e.target.value)}
        />
        <button type='button' onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default CounterOne