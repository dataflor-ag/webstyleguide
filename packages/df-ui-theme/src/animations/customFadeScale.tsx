// src/components/CustomFadeScale.tsx

import React, { ReactElement, useRef, useEffect } from 'react'
import { TransitionProps } from '@mui/material/transitions'
import { Fade } from '@mui/material'

const CustomFadeScale = React.forwardRef<HTMLDivElement, TransitionProps & { children: ReactElement }>((props, ref) => {
  const nodeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!nodeRef.current) return

    const node = nodeRef.current

    if (props.in) {
      node.style.transition = 'opacity 0.2s cubic-bezier(0.22, 0.61, 0.36, 1)'
      node.style.opacity = '0'
      node.style.transform = 'scale(0.95)'
      requestAnimationFrame(() => {
        node.style.transition = 'all 0.25s cubic-bezier(0.22, 0.61, 0.36, 1)'
        node.style.opacity = '1'
        node.style.transform = 'scale(1)'
      })
    } else {
      node.style.transition = 'all 0.15s cubic-bezier(0.22, 0.61, 0.36, 1)'
      node.style.opacity = '0'
      node.style.transform = 'scale(0.98)'
    }
  }, [props.in])

  return (
    <Fade
      ref={ref}
      {...props}
      timeout={{ enter: 250, exit: 150 }}
      style={{ transformOrigin: 'center center' }}
    >
      {React.cloneElement(props.children, { ref: nodeRef })}
    </Fade>
  )
})

export default CustomFadeScale
