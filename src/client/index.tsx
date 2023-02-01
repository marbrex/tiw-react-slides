import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import store from './application/store'
import { StoreProvider } from 'easy-peasy'
import App from './App'
import ErrorPage from './routes/ErrorPage'
import SlideLayout from './components/SlideLayout'
import Slide from './components/Slide'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/slide',
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
