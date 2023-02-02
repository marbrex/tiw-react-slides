import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStoreActions, useStoreState } from '../application/store/hooks'

interface Props {
  displayInvisible?: boolean
}

const Slide: React.FC<Props> = ({ displayInvisible = true }) => {
  const isVisible = useStoreState(state => state.isVisible)
  const slide = useStoreState(state => state.slide)
  const slideIndex = useStoreState(state => state.slideIndex)
  const slidesCount = useStoreState(state => state.slidesCount)

  const routerParams = useParams()
  const navigate = useNavigate()
  const slides = useStoreState(state => state.slides)
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

      let nextSlideIndex = id - 1
      if (!displayInvisible && nextSlideIndex > slideIndex && !slides[nextSlideIndex].visible) {
        nextSlideIndex = slides.slice(id - 1).findIndex(s => s.visible) + (id - 1)
        navigate(`../${nextSlideIndex + 1}`)
      } else if (!displayInvisible && nextSlideIndex < slideIndex && !slides[nextSlideIndex].visible) {
        nextSlideIndex = (id - 1) - slides.slice(0, id).reverse().findIndex(s => s.visible)
        navigate(`../${nextSlideIndex + 1}`)
      } else {
        setSlide({ slideIndex: nextSlideIndex })
      }
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
