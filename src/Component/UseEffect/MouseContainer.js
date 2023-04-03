import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button type='button'
        onClick={() => setDisplay(!display)}
        >
            Toggle Mouse
        </button>
        {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer