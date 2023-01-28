import React from 'react'
import { useStoreActions } from '../application/store/hooks'

interface Props {
  slideIndex: number
  slidesCount: number
}

const SlidePagination: React.FC<Props> = ({ slideIndex, slidesCount }) => {
  const [slideNum, setSlideNum] = React.useState<number>(slideIndex + 1)
  const [valid, setValid] = React.useState<boolean>(true)

  const setSlideIndex = useStoreActions(actions => actions.setSlideIndex)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement, Element>): void => {
    if (valid) setSlideIndex({ slideIndex: event.target.valueAsNumber - 1 })
    else {
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
