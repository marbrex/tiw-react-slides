import React from 'react'
import { useStoreActions, useStoreState } from '../application/store/hooks'

const SlideNotes: React.FC = () => {

  const slide = useStoreState(state => state.slide)
  const setSlideNotes = useStoreActions(state => state.setSlideNotes)

  const [initialNotesHeight, setInitialNotesHeight] = React.useState<number>(0)
  const [initialMouseYPos, setInitialMouseYPos] = React.useState<number>(0)
  const [resizedNotesHeight, setResizedNotesHeight] = React.useState<number>(0)

  const handleOnDragStart = (event: React.DragEvent<HTMLDivElement>): void => {
    // console.log('in handleOnDragStart')
    const div = event.target as HTMLDivElement
    if (div?.parentElement) {
      if (initialNotesHeight === 0) setInitialNotesHeight(div.parentElement.offsetHeight)
      if (initialMouseYPos === 0) setInitialMouseYPos(event.pageY)
    }
  }

  const handleOnDrag = (event: React.DragEvent<HTMLDivElement>): void => {
    // console.log('in handleOnDrag')
    const div = event.target as HTMLDivElement
    if (div?.parentElement) {
      const mouseYPos = event.pageY
      const mouseDiffPos = initialMouseYPos - mouseYPos
      let newHeight = initialNotesHeight + mouseDiffPos
      newHeight = newHeight < 0 ? 0 : newHeight
      // console.log(newHeight)
      div.parentElement.style.height = newHeight.toString() + 'px'
      setResizedNotesHeight(newHeight)
    }
  }

  const handleOnDragEnd = (event: React.DragEvent<HTMLDivElement>): void => {
    // console.log('in handleOnDragEnd')
    const div = event.target as HTMLDivElement
    if (div?.parentElement) {
      div.parentElement.style.height = resizedNotesHeight.toString() + 'px'
    }
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    // console.log('ON CHANGE')
    setSlideNotes(event.target.value)
  }

  return (
    <>
      <div className='SlideNotes'>
        <div className='ResizeBar' draggable
          onDragStart={handleOnDragStart}
          onDrag={handleOnDrag}
          onDragEnd={handleOnDragEnd}>
        </div>
        <textarea cols={30} rows={10}
          placeholder='Type your notes here...'
          value={slide.notes}
          onChange={handleOnChange}>
        </textarea>
      </div>
    </>
  )
}

export default SlideNotes
