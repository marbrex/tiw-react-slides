import * as React from 'react'
import SlideShow from './components/SlideShow'
import AppToolbar from './components/AppToolbar'

const App: React.FC = () => {
  return (
    <div className="App">
      <SlideShow />
      <AppToolbar />
    </div>
  )
}

export default App
