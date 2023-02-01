import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStoreState } from '../application/store/hooks'

const SlideControls: React.FC = () => {

  const slideIndex = useStoreState(state => state.slideIndex)
  const slidesCount = useStoreState(state => state.slidesCount)

  const navigate = useNavigate()

  return (
    <div className='SlideControls'>
      <button className='prev-slide-btn' type="button" onClick={() => navigate(`/slide/${slideIndex}`)} disabled={slideIndex === 0}>Prev</button>
      <button className='next-slide-btn' type="button" onClick={() => navigate(`/slide/${slideIndex + 2}`)} disabled={slideIndex === slidesCount - 1}>Next</button>
    </div>
  )
}

export default SlideControls
