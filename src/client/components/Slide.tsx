import React from 'react'
import { useParams } from 'react-router-dom'
import { useStoreActions, useStoreState } from '../application/store/hooks'

const Slide: React.FC = () => {
  const isVisible = useStoreState(state => state.isVisible)
  const slide = useStoreState(state => state.slide)
  const slidesCount = useStoreState(state => state.slidesCount)

  const routerParams = useParams()
  const setSlide = useStoreActions(state => state.setSlideIndex)
  React.useEffect(() => {
    if (routerParams?.id) {
      const id = Number(routerParams.id)
      const min = 1
      const max = slidesCount

      // Value validation
      if (isNaN(id) || id < min || id > max) {
        throw new Error('This slide does not exist')
      }

      setSlide({ slideIndex: id - 1 })
    }
  }, [routerParams, slidesCount, setSlide])

  return (
    <div className={`Slide ${!isVisible ? 'invisible' : ''}`}>
      <span className='Slide-title'>{slide.title}</span>
      <span className='Slide-text'>{slide.text}</span>
    </div>
  )
}

export default Slide
