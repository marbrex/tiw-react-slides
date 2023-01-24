import React from 'react'

interface Props {
  slide: Slide
}

const Slide: React.FC<Props> = ({ slide }) => {
  return (
    <div className='Slide'>
      <span className='Slide-title'>{slide.title}</span>
      <span className='Slide-text'>{slide.text}</span>
    </div>
  )
}

export default Slide
