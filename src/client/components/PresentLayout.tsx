import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { useStoreState } from '../application/store/hooks'
import EditButton from './EditButton'
import FullScreenButton from './FullScreenButton'
import SlideControls from './SlideControls'
import SlidePagination from './SlidePagination'

const PresentLayout: React.FC = () => {
  const slideNum = useStoreState(state => state.slideIndex + 1)

  return (
    <div className='PresentLayout'>
      <EditButton slideNum={slideNum} />
      <FullScreenButton />
      <Outlet />
      <SlideControls />
      <SlidePagination />
    </div>
  )
}

export default PresentLayout
