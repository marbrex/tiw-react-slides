import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStoreState } from '../application/store/hooks'

const SlideControls: React.FC = () => {

  const slideIndex = useStoreState(state => state.slideIndex)
  const slidesCount = useStoreState(state => state.slidesCount)

  const navigate = useNavigate()

  const onClickPrev = (): void => {
    const nextSlideNum: number = slideIndex
    navigate(`slide/${nextSlideNum}`)
  }

  const onClickNext = (): void => {
    const nextSlideNum: number = slideIndex + 2
    navigate(`slide/${nextSlideNum}`)
  }

  return (
    <div className='SlideControls'>
      <button className='prev-slide-btn' type="button"
        onClick={onClickPrev} disabled={slideIndex === 0}>
        {'<'}
      </button>
      <button className='next-slide-btn' type="button"
        onClick={onClickNext} disabled={slideIndex === slidesCount - 1}>
        {'>'}
      </button>
    </div>
  )
}

export default SlideControls
