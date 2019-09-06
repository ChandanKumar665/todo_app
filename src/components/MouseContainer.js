import React, { useState } from 'react'
import MouseHook from './MouseHook';

export default function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick = {e => setDisplay(!display)}>Toggle Mouse Hook</button>
      {display && <MouseHook/>}
    </div>
  )
}
