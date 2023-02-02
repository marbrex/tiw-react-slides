import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStoreState } from '../application/store/hooks'
import Events from '../events'

const SlideControls: React.FC = () => {

  const slideIndex = useStoreState(state => state.slideIndex)
  const slidesCount = useStoreState(state => state.slidesCount)

  const navigate = useNavigate()

  return (
    <div className='SlideControls'>
      <button className='prev-slide-btn' type="button" onClick={() => {
        const nextSlideNum: number = slideIndex
        navigate(`slide/${nextSlideNum}`)
        Events.emitSlideChanged(nextSlideNum)
      }} disabled={slideIndex === 0}>Prev</button>
      <button className='next-slide-btn' type="button" onClick={() => {
        const nextSlideNum: number = slideIndex + 2
        navigate(`slide/${nextSlideNum}`)
        Events.emitSlideChanged(nextSlideNum)
      }} disabled={slideIndex === slidesCount - 1}>Next</button>
    </div>
  )
}

export default SlideControls
