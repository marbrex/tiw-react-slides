import { Store } from 'easy-peasy'
import socket from './index'

export const initOnSlideChanged = (store: Store): void => {
  socket.on('slideChanged', (payload: { currentSlideNum: number }) => {
    console.log('in slideChanged', payload)
    store.dispatch({
      type: '@action.setSlideIndex',
      payload: { slideIndex: payload.currentSlideNum - 1 },
      meta: { isAutoGenerated: true }
    })
  })
}

export default {
  initOnSlideChanged
}
