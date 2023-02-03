import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStoreActions, useStoreState } from '../application/store/hooks'

const SlideControls: React.FC = () => {

  const slideIndex = useStoreState(state => state.slideIndex)
  const slidesCount = useStoreState(state => state.slidesCount)
  const setSlideIndex = useStoreActions(state => state.setSlideIndex)
  const location = useLocation()
  const navigate = useNavigate()

  const onClickPrev = (): void => {
    const nextSlideNum: number = slideIndex
    const path = location.pathname.split('/').filter(x => x !== '').at(0)
    if (path === 'control') {
      setSlideIndex({ slideIndex: nextSlideNum - 1 })
    } else {
      navigate(`slide/${nextSlideNum}`)
    }
  }

  const onClickNext = (): void => {
    const nextSlideNum: number = slideIndex + 2
    const path = location.pathname.split('/').filter(x => x !== '').at(0)
    if (path === 'control') {
      setSlideIndex({ slideIndex: nextSlideNum - 1 })
    } else {
      navigate(`slide/${nextSlideNum}`)
    }
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
