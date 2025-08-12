import React from 'react'
import Chatbot from './Pdfdow'
import Reactchatbot from './Reactchatbot'
import Dashboard from './Component/Dashboard'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const Body = () => {
  return (
    <Router>
          <Routes>
              <Route path='/' element={<Reactchatbot/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>

          </Routes>
    </Router>
  
  )
}

export default Body
