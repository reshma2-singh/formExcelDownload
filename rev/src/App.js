import React from 'react'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
     
          <Route exact path="/" element={<Login />}/>
          <Route path="/home" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App