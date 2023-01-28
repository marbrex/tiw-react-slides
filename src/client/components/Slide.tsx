import React from 'react'
import { useStoreState } from '../application/store/hooks'

interface Props {
  slide: Slide
}

const Slide: React.FC<Props> = ({ slide }) => {
  const slideNum = useStoreState(state => state.slideIndex + 1)

  return (
    <div className='Slide'>
      <span className='Slide-title'>{slide.title}</span>
      <span className='Slide-text'>{slide.text}</span>
      <span>Slide Number {slideNum}</span>
    </div>
  )
}

export default Slide
