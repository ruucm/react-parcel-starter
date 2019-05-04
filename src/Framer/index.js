import React from 'react'
import { Frame, Stack } from 'framer'

function Framer() {
  const container = {
    hidden: { rotate: 90 },
    show: {
      top: 200,
      rotate: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemA = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 0 },
  }

  const itemB = {
    hidden: { scale: 0, top: 250 },
    show: { scale: 1, top: 0 },
  }

  return (
    <div>
      <Stack
        background="white"
        direction="horizontal"
        distribution="center"
        gap={0}
        size={230}
        style={{
          flexWrap: 'wrap',
          alignContent: 'center',
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Frame
          variants={itemA}
          background="rgba(0, 85, 255, 1)"
          size={100}
          radius={16}
        />
        <Frame
          variants={itemA}
          background="rgba(0, 85, 255, 1)"
          size={100}
          radius={16}
        />
        <Frame
          variants={itemB}
          background="rgba(0, 85, 255, 1)"
          size={100}
          radius={16}
        />
        <Frame
          variants={itemB}
          background="rgba(0, 85, 255, 1)"
          size={100}
          radius={16}
        />
      </Stack>
    </div>
  )
}

export default Framer
