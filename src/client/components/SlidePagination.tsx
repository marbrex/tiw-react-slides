import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStoreState } from '../application/store/hooks'

const SlidePagination: React.FC = () => {

  const slideIndex = useStoreState(state => state.slideIndex)
  const slidesCount = useStoreState(state => state.slidesCount)
  const slideNumStore = useStoreState(state => state.slideIndex + 1)

  const [slideNum, setSlideNum] = React.useState<number>(slideIndex + 1)
  const [valid, setValid] = React.useState<boolean>(true)
  const [isBeingChanged, setIsBeingChanged] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (slideNum !== slideNumStore && !isBeingChanged) {
      setSlideNum(slideNumStore)
    }
  }, [slideNum, slideNumStore])

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      const htmlElement = event.target as HTMLElement
      if (htmlElement?.blur) htmlElement.blur()
    }
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIsBeingChanged(true)
    const { valueAsNumber, min, max } = event.target
    if (isNaN(valueAsNumber) || valueAsNumber < Number(min) || valueAsNumber > Number(max)) {
      setValid(false)
    } else {
      setValid(true)
    }
    setSlideNum(valueAsNumber)
  }

  const navigate = useNavigate()
  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement, Element>): void => {
    setIsBeingChanged(false)
    if (valid) {
      let slideNumAsInt = slideNum
      if (!Number.isInteger(slideNum)) {
        slideNumAsInt = Number.parseInt(slideNum.toString())
      }
      navigate(`/slide/${slideNumAsInt}`)
    } else {
      setSlideNum(slideIndex + 1)
    }
  }

  return (
    <div className='SlidePagination'>
      <input type='number' placeholder='Slide'
        min={1} max={slidesCount}
        value={isNaN(slideNum) ? '' : slideNum}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onKeyDown={handleOnKeyDown}/>
      <span> of {slidesCount}</span>
    </div>
  )
}

export default SlidePagination
