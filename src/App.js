import React from 'react'
import './App.css'
import SideList from './Components/SideList/SideList'
import Dashboard from './Components/Dashboard/Dashboard'


const App = () => {
  return (
    <div className='main-container'>
      <SideList/>
      <Dashboard/>
    </div>
  )
}

export default App