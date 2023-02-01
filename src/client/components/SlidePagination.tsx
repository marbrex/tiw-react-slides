import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStoreState } from '../application/store/hooks'

interface Props {
  slideIndex: number
  slidesCount: number
}

const SlidePagination: React.FC<Props> = ({ slideIndex, slidesCount }) => {
  const [slideNum, setSlideNum] = React.useState<number>(slideIndex + 1)
  const [valid, setValid] = React.useState<boolean>(true)
  const [isBeingChanged, setIsBeingChanged] = React.useState<boolean>(false)
  const slideNumStore = useStoreState(state => state.slideIndex + 1)

  useEffect(() => {
    if (slideNum !== slideNumStore && !isBeingChanged) {
      setSlideNum(slideNumStore)
    }
  }, [slideNum, slideNumStore])

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIsBeingChanged(true)
    const { valueAsNumber, min, max } = event.target
    if (isNaN(valueAsNumber) || valueAsNumber < Number(min) || valueAsNumber > Number(max)) {
      setValid(false)
      event.target.classList.add('invalid-value')
    } else {
      setValid(true)
      event.target.classList.remove('invalid-value')
    }
    setSlideNum(valueAsNumber)
  }

  const navigate = useNavigate()
  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement, Element>): void => {
    setIsBeingChanged(false)
    console.log('in handle on blur')
    if (valid) {
      console.log(slideNum)
      navigate(`/slide/${slideNum}`)
    } else {
      setSlideNum(slideIndex + 1)
      event.target.classList.remove('invalid-value')
    }
  }

  return (
    <div className='SlidePagination'>
      <input type='number' placeholder='Slide'
        min={1} max={slidesCount}
        value={isNaN(slideNum) ? '' : slideNum}
        onChange={handleOnChange}
        onBlur={handleOnBlur}/>
      <span> of {slidesCount}</span>
    </div>
  )
}

export default SlidePagination
