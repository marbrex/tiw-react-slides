import { Action, Computed } from 'easy-peasy'

export interface SlideStoreModel {
  name: string
  slides: Slide[]
  slideIndex: number
  slidesCount: Computed<SlideStoreModel, number>
  slide: Computed<SlideStoreModel, Slide>
  isVisible: Computed<SlideStoreModel, boolean>
  nextSlide: Action<SlideStoreModel>
  previousSlide: Action<SlideStoreModel>
  setSlideIndex: Action<SlideStoreModel, SetSlideAction>
  setSlideNotes: Action<SlideStoreModel, string>
  toggleSlideVisibility: Action<SlideStoreModel>
}

export interface SetSlideAction {
  slideIndex: number
}
