import React from 'react'
import { useStoreState } from '../application/store/hooks'

interface Props {
  slide: Slide
}

const Slide: React.FC<Props> = ({ slide }) => {
  const isVisible = useStoreState(state => state.isVisible)

  return (
    <div className={`Slide ${!isVisible ? 'invisible' : ''}`}>
      <span className='Slide-title'>{slide.title}</span>
      <span className='Slide-text'>{slide.text}</span>
    </div>
  )
}

export default Slide
