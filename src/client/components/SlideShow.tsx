import * as React from 'react'
import Slide from './Slide'

interface Props {
  slides: Slide[]
}

const SlideShow: React.FC<Props> = ({ slides }): JSX.Element => {
  return (
    <div className='SlideShow'>
      {
        slides
          .filter(slide => slide.visible)
          .map((slide, idx) => <Slide key={idx} slide={slide} />)
      }
    </div>
  )
}

export default SlideShow
