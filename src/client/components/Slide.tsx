import React from 'react'
import { useParams } from 'react-router-dom'
import { useStoreActions, useStoreState } from '../application/store/hooks'

const Slide: React.FC = () => {
  const isVisible = useStoreState(state => state.isVisible)
  const slide = useStoreState(state => state.slide)
  const slidesCount = useStoreState(state => state.slidesCount)

  const routerParams = useParams()
  if (routerParams?.id) {
    const id = Number(routerParams.id)
    const min = 1
    const max = slidesCount

    // Value validation
    if (isNaN(id) || id < min || id > max) {
      throw new Error('This slide does not exist')
    }

    const setSlide = useStoreActions(state => state.setSlideIndex)
    setSlide({ slideIndex: id - 1 })
  }

  return (
    <div className='SlideShow'>
      <div className={`Slide ${!isVisible ? 'invisible' : ''}`}>
        <span className='Slide-title'>{slide?.title ? slide.title : 'UNDEFINED'}</span>
        <span className='Slide-text'>{slide?.text ? slide.text : 'UNDEFINED'}</span>
      </div>
    </div>
  )
}

export default Slide
