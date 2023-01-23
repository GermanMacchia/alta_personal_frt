import React from 'react'
import { Navbar } from './components/Nav'
import { Outlet } from "react-router-dom"

function App () {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App