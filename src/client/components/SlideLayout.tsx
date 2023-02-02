import * as React from 'react'
import { Outlet } from 'react-router-dom'
import SlideNotes from './SlideNotes'

interface Props {
  showSlideNotes?: boolean
}

const SlideLayout: React.FC<Props> = ({ showSlideNotes = true }) => {
  return (
    <div className='SlideLayout'>
      <Outlet />
      { showSlideNotes && <SlideNotes /> }
    </div>
  )
}

export default SlideLayout
