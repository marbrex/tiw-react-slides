import * as React from 'react'
import { Outlet } from 'react-router-dom'
import AppToolbar from './AppToolbar'

const SlideLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <AppToolbar />
    </>
  )
}

export default SlideLayout
