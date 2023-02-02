import * as React from 'react'
import { useStoreActions } from '../application/store/hooks'
import SlidePagination from './SlidePagination'
import SlideControls from './SlideControls'

const AppToolbar: React.FC = (): JSX.Element => {
  const toggleSlideVisibility = useStoreActions(actions => actions.toggleSlideVisibility)

  return (
    <div className='AppToolbar'>
      <button type="button" onClick={() => toggleSlideVisibility()}>Toggle Visibility</button>
      <SlideControls />
      <SlidePagination />
    </div>
  )
}

export default AppToolbar
