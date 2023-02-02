import * as React from 'react'
import { Outlet } from 'react-router-dom'
import FullScreenButton from './FullScreenButton'
import SlideControls from './SlideControls'
import SlidePagination from './SlidePagination'

const PresentLayout: React.FC = () => {
  return (
    <div className='PresentLayout'>
      <FullScreenButton />
      <Outlet />
      <SlideControls />
      <SlidePagination />
    </div>
  )
}

export default PresentLayout
