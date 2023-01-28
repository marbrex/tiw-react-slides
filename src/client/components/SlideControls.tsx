import React from 'react'
import { useStoreActions, useStoreState } from '../application/store/hooks'

const SlideControls: React.FC = () => {
  const nextSlide = useStoreActions(actions => actions.nextSlide)
  const prevSlide = useStoreActions(actions => actions.previousSlide)

  const slideIndex = useStoreState(state => state.slideIndex)
  const slidesCount = useStoreState(state => state.slidesCount)

  return (
    <div className='SlideControls'>
      <button className='prev-slide-btn' type="button" onClick={() => prevSlide()} disabled={slideIndex === 0}>Prev</button>
      <button className='next-slide-btn' type="button" onClick={() => nextSlide()} disabled={slideIndex === slidesCount - 1}>Next</button>
    </div>
  )
}

export default SlideControls
