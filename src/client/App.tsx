import * as React from 'react'
import SlideShow from './components/SlideShow'
import AppToolbar from './components/AppToolbar'
import SLIDES from './slides'

const App: React.FC = () => {
  const [slides] = React.useState(SLIDES)

  return (
    <div className="App">
      <AppToolbar slides={slides} />
      <SlideShow slides={slides} />
    </div>
  )
}

export default App
