import socket from './index'

export const emitSlideChanged = (currentSlideNum: number): void => {
  socket.emit('slideChanged', {
    currentSlideNum
  })
}

export default {
  emitSlideChanged
}
