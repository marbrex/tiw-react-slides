import * as React from 'react'
import { Outlet } from 'react-router-dom'
import FullScreenButton from './FullScreenButton'

const PresentLayout: React.FC = () => {
  return (
    <div className='PresentLayout'>
      <FullScreenButton />
      <Outlet />
    </div>
  )
}

export default PresentLayout
