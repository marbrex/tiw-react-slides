import * as React from 'react'
import { Outlet } from 'react-router-dom'
import SlideNotes from './SlideNotes'

const SlideLayout: React.FC = () => {
  return (
    <div className='SlideLayout'>
      <Outlet />
      <SlideNotes />
    </div>
  )
}

export default SlideLayout
