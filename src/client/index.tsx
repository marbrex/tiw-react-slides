import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import store from './application/store'
import { StoreProvider } from 'easy-peasy'
import App from './App'
import ErrorPage from './routes/ErrorPage'
import SlideLayout from './components/SlideLayout'
import Slide from './components/Slide'
import SlideControls from './components/SlideControls'
import SlidePagination from './components/SlidePagination'
import ControlLayout from './components/ControlLayout'
import { isMobile } from 'react-device-detect'

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => {
      if (isMobile) return redirect('/control')
      return null
    },
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'slide',
        element: <SlideLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            loader: () => redirect('/slide/1')
          },
          {
            path: ':id',
            element: <Slide />,
            errorElement: <ErrorPage />
          }
        ]
      }
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
