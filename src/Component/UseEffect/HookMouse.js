import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    let logMousePosition = (e)=>{
      console.log('Event called');
      setX(e.clientX)
      setY(e.clientY)
    }

    useEffect(()=>{
      console.log('useEffect called');
      window.addEventListener('mousemove',logMousePosition)

      return ()=>{
        console.log('use');
        window.removeEventListener('mousemove', logMousePosition)
      }
    }, [])
  return (
    <div>
        Hook X - {x} Y - {y}
    </div>
  )
}

export default HookMouse