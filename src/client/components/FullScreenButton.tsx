import * as React from 'react'

const FullScreenButton: React.FC = () => {

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }

  return (
    <button type='button' className='FullScreenButton'
      onClick={handleOnClick}>
      Toggle Full Screen
    </button>
  )
}

export default FullScreenButton
