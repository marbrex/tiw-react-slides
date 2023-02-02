import * as React from 'react'
import { useNavigate } from 'react-router-dom'

interface Params {
  slideNum?: number
}

const EditButton: React.FC<Params> = ({ slideNum = 1 }) => {

  const navigate = useNavigate()
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    navigate(`/edit/slide/${slideNum}`)
  }

  return (
    <button type='button' className='EditButton'
      onClick={handleOnClick}>
      Edit
    </button>
  )
}

export default EditButton
