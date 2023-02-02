import * as React from 'react'
import { Outlet } from 'react-router-dom'
import AppToolbar from './AppToolbar'

const EditLayout: React.FC = () => {
  return (
    <div className='EditLayout'>
      <Outlet />
      <AppToolbar />
    </div>
  )
}

export default EditLayout
