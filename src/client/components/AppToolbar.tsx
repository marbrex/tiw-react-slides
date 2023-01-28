import * as React from 'react'
import { useStoreActions, useStoreState } from '../application/store/hooks'
import SlidePagination from './SlidePagination'
import SlideControls from './SlideControls'

const AppToolbar: React.FC = (): JSX.Element => {
  const slideIndex = useStoreState(state => state.slideIndex)
  const slidesCount = useStoreState(state => state.slidesCount)
  const toggleSlideVisibility = useStoreActions(actions => actions.toggleSlideVisibility)

  return (
    <div className='AppToolbar'>
      <button type="button" onClick={() => toggleSlideVisibility()}>Toggle Visibility</button>
      <SlideControls />
      <SlidePagination slideIndex={slideIndex} slidesCount={slidesCount} />
    </div>
  )
}

export default AppToolbar
