import { action, computed, createStore } from 'easy-peasy'
import SLIDES from '../../slides'
import { SlideStoreModel } from './model'

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

const store = createStore(storeModel, {
  middleware: []
})

export default store
