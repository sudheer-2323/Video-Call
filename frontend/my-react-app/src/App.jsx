import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing'

import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Authentication from './pages/Authentication'
import { AuthProvider } from './contexts/AuthContext'
import VideoMeet from './pages/VideoMeet'
import Home from './pages/Home'
import History from './pages/history'

function App() 
{
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
        <Routes>
          
          <Route path='/' element ={<Landing />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/history' element={<History />} />


          <Route path='/auth' element={<Authentication  />}/>
          <Route path='/:url' element={<VideoMeet />}/>
        </Routes>
        </AuthProvider>
      </Router>

    </div>
  )
}

export default App
