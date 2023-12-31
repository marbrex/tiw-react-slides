import { action, computed, createStore } from 'easy-peasy'
import SLIDES from '../../slides'
import { SlideStoreModel } from './model'
import { Middleware, Dispatch, AnyAction } from '@reduxjs/toolkit'
import socket from '../../websocket'
import Events from '../../websocket/events'
import Listeners from '../../websocket/listeners'

const storeModel: SlideStoreModel = {
  name: 'slidesApp',
  slides: SLIDES,
  slideIndex: 0,
  slidesCount: computed(state => state.slides.length),
  isVisible: computed(state => {
    if (state.slides[state.slideIndex]?.visible) {
      return state.slides[state.slideIndex].visible
    }
    return false
  }),
  slide: computed(state => state.slides[state.slideIndex]),
  nextSlide: action(state => {
    state.slideIndex = state.slideIndex < state.slides.length - 1 ? state.slideIndex + 1 : state.slideIndex
  }),
  previousSlide: action(state => {
    state.slideIndex = state.slideIndex > 0 ? state.slideIndex - 1 : state.slideIndex
  }),
  setSlideIndex: action((state, payload) => {
    state.slideIndex = payload.slideIndex
  }),
  setSlideNotes: action((state, payload) => {
    state.slides[state.slideIndex].notes = payload
  }),
  toggleSlideVisibility: action(state => {
    state.slides[state.slideIndex].visible = !state.slides[state.slideIndex].visible
  })
}

// const myLoggerMiddleware: Middleware<Dispatch, SlideStoreModel> = api => next => {
//   return (action: AnyAction) => {
//     console.log('State Before:', api.getState())
//     return next(action)
//   }
// }

const propagateSocketMiddleware: Middleware<Dispatch, SlideStoreModel> = api => next => {
  return (action: AnyAction) => {
    const prevState = api.getState()

    console.log('propagateSocketMiddleware', action)
    console.log('Prev state:', prevState)

    switch (action.type) {
      case '@action.setSlideIndex':
        if (!action.meta?.isAutoGenerated) {
          const slideNum: number = Number(action.payload.slideIndex) + 1
          Events.emitSlideChanged(slideNum)
        }
        break
      default:
        break
    }

    return next(action)
  }
}

const listenSocketMiddleware: Middleware<Dispatch, SlideStoreModel> = api => next => {
  return (action: AnyAction) => {

    if (!socket.hasListeners('slideChanged')) Listeners.initOnSlideChanged(store)

    return next(action)
  }
}

const store = createStore(storeModel, {
  middleware: [propagateSocketMiddleware, listenSocketMiddleware]
})

export default store
