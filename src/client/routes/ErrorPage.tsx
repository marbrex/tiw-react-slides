import React from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <span>Error:</span> <i>{isRouteErrorResponse(error) ? error.statusText : ''}</i>
      </p>
    </div>
  )
}

export default ErrorPage
