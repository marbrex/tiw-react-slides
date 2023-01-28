import { createTypedHooks } from 'easy-peasy'
import { SlideStoreModel } from './model'

const { useStoreActions, useStoreState, useStoreDispatch, useStore } = createTypedHooks<SlideStoreModel>()

export {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore
}
