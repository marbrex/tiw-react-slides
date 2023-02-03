import * as React from 'react'
import { Outlet } from 'react-router-dom'
import SlideControls from './SlideControls'
import SlidePagination from './SlidePagination'

const ControlLayout: React.FC = () => {
  return (
    <div className='ControlLayout'>
      <Outlet />
      <SlideControls />
      <SlidePagination />
    </div>
  )
}

export default ControlLayout
