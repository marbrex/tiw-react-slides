import * as React from 'react'
import { Outlet } from 'react-router-dom'
import AppToolbar from './AppToolbar'

const AppLayout: React.FC = () => {
  return (
    <div className='AppLayout'>
      <Outlet />
      <AppToolbar />
    </div>
  )
}

export default AppLayout
