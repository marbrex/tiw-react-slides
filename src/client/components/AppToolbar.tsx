import * as React from 'react'
import { useStoreActions } from '../application/store/hooks'
import SlidePagination from './SlidePagination'
import SlideControls from './SlideControls'
import FullScreenButton from './FullScreenButton'

const AppToolbar: React.FC = (): JSX.Element => {
  const toggleSlideVisibility = useStoreActions(actions => actions.toggleSlideVisibility)

  return (
    <div className='AppToolbar'>
      <button type="button" onClick={() => toggleSlideVisibility()}>Toggle Visibility</button>
      <SlideControls />
      <SlidePagination />
      <FullScreenButton />
    </div>
  )
}

export default AppToolbar
