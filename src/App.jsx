import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GsapTo from './components/GsapTo'
import GsapFrom from './components/GsapFrom'
import GsapFromTo from './components/GsapFromTo'
import GsapTimeline from './components/GsapTimeline'
import GsapStagger from './components/GsapStagger'
import GsapScrollTrigger from './components/GsapScrollTrigger'
import GsapText from './components/GsapText'

import { Route, Routes } from 'react-router'
import AboutJsm from './pages/AboutJsm'
import Home from './pages/Home'
import Text from './pages/Text'
import Slides from './pages/Slides'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutJsm/>} />
        <Route path='/text' element={<Text/>}/>
        <Route path='/slides' element={<Slides/>}/>
      </Routes>
  
    </>
  )
}

export default App
