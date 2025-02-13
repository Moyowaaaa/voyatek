import React, { useRef } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const SectionTwo = () => {
const textRef = useRef<HTMLHeadingElement | null>(null)

  const onScreen = useIntersectionObserver(textRef,0.1)
  console.log({onScreen})

  return (
    <div className='h-screen bg-[teal] flex items-center justify-center text-4xl'>
    
    <h1 data-animation="header">Section Two </h1>
    </div>
  )
}

export default SectionTwo