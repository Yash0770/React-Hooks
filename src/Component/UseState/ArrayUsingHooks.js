import React, {useState} from 'react'

function ArrayUsingHooks() {
    const [items, setitems] = useState([])

    const addItem = ()=>{
      setitems([
        ...items,{
          id : items.length,
          value: Math.floor(Math.random()*10)+1
        }
      ])
    }

  return (
    <div>
        <button type='button' onClick={addItem}>Add number</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default ArrayUsingHooks
