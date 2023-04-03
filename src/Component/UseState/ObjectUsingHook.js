import React, { useState } from 'react'

// Objects using Hooks

function HookCounterThree() {
    const [name, setname] = useState({
        firstName: '',
        lastName: ''
    })
    
  return (
    <form action="">
        <input type="text" value={name.firstName} onChange={e => setname({...name, firstName: e.target.value}) } />
        <input type="text" value={name.lastName} onChange={e => setname({...name, lastName: e.target.value})}/>

        <h3>FirstName : {name.firstName}</h3>
        <h3>LastName : {name.lastName}</h3>
        {/* <h1>{JSON.stringify(name)}</h1> */}
    </form>
  )
}

export default HookCounterThree
