import * as React from 'react'
import { useNavigate } from 'react-router-dom'

interface Params {
  slideNum?: number
}

const PresentButton: React.FC<Params> = ({ slideNum = 1 }) => {

  const navigate = useNavigate()
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    navigate(`/present/slide/${slideNum}`)
  }

  return (
    <button type='button' className='PresentButton'
      onClick={handleOnClick}>
      Present
    </button>
  )
}

export default PresentButton
