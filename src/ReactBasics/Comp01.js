import React from 'react'
import useHover from './use-hover'

function Comp01() {
  const [hoverRef, isHovered] = useHover()
  const [hoverRef2, isHovered2] = useHover()

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

      <div
        ref={hoverRef2}
        style={{
          color: 'white',
          padding: '8rem',
          width: '12rem',
          textAlign: 'center',
          fontSize: '5rem',
          backgroundColor: isHovered2 ? 'blue' : '#ccc',
        }}
      >
        {isHovered2 ? '😁' : '☹️'}
      </div>
    </div>
  )
}

export default Comp01