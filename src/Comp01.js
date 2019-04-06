import React from 'react'
import useHover from './use-hover'

function Comp01() {
  const [hoverRef, isHovered] = useHover()

  return (
    <div>
      <h1>react hooks</h1>
      <div
        ref={hoverRef}
        style={{
          color: 'white',
          padding: '8rem',
          width: '12rem',
          textAlign: 'center',
          fontSize: '5rem',
          backgroundColor: isHovered ? '#00e3e3' : '#ccc',
        }}
      >
        {isHovered ? '😁' : '☹️'}
      </div>
    </div>
  )
}

export default Comp01
