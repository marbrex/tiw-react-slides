import io from 'socket.io-client'

export default {

  emitSlideChanged: (currentSlideNum: number): void => {
    const socket = io()
    socket.emit('slide changed', {
      currentSlideNum
    })
  }

}
