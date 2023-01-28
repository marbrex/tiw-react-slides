import * as React from 'react'
import { useStoreState } from '../application/store/hooks'
import Slide from './Slide'

const SlideShow: React.FC = (): JSX.Element => {
  const slide = useStoreState(state => state.slide)

  return (
    <div className='SlideShow'>
      <Slide slide={slide} />
    </div>
  )
}

export default SlideShow
