import * as React from 'react'
import { NavLink } from 'react-router-dom'

const ModeSelector: React.FC = () => {
  return (
    <div className='ModeSelector'>
      <NavLink to='/edit'>Edit</NavLink>
      <NavLink to='/present'>Present</NavLink>
      <NavLink to='/control'>Control</NavLink>
    </div>
  )
}

export default ModeSelector
