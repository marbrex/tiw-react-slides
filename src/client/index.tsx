import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouteObject, RouterProvider } from 'react-router-dom'
import store from './application/store'
import { StoreProvider } from 'easy-peasy'
import ErrorPage from './routes/ErrorPage'
import SlideLayout from './components/SlideLayout'
import Slide from './components/Slide'
import SlideControls from './components/SlideControls'
import SlidePagination from './components/SlidePagination'
import ControlLayout from './components/ControlLayout'
import { isMobile } from 'react-device-detect'
import EditLayout from './components/EditLayout'
import PresentLayout from './components/PresentLayout'
import ModeSelector from './components/ModeSelector'

// ============ Attention ============
// Redirects must should only be provided with paths to siblings,
// else if a path to children is given, there will be an infinite loop
// (Use 'index=true' child to redirect to children)
// ===================================

const getSlideRoute = (showSlideNotes: boolean = true, displayInvisible: boolean = true): RouteObject => {
  return {
    path: 'slide',
    element: <SlideLayout showSlideNotes={showSlideNotes}/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => redirect('1')
      },
      {
        path: ':id',
        element: <Slide displayInvisible={displayInvisible} />,
        errorElement: <ErrorPage />
      }
    ]
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => {
      if (isMobile) return redirect('control')
      return null
    },
    element: <ModeSelector />,
    errorElement: <ErrorPage />
  },
  {
    path: 'edit',
    loader: () => {
      if (isMobile) return redirect('/control')
      return null
    },
    element: <EditLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => redirect('slide')
      },
      getSlideRoute()
    ]
  },
  {
    path: 'control',
    element: <ControlLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <>
          <SlideControls />
          <SlidePagination />
        </>
      }
    ]
  },
  {
    path: 'present',
    loader: () => {
      if (isMobile) return redirect('/control')
      return null
    },
    element: <PresentLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => redirect('slide')
      },
      getSlideRoute(false, false)
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StoreProvider>
)
