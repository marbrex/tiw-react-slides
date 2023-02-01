import * as React from 'react'
import { Outlet } from 'react-router-dom'

const ControlLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default ControlLayout
