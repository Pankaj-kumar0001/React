import React from 'react'

import { Link } from 'react-router-dom'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
    <h1 style={{ textAlign:'center', fontSize:'40px'}}>This is the Practice page of Router</h1>
    <Header />
     <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '60vh', 
        flexDirection: 'column' 
      }}>
        <Outlet />
        </div>
   </div>
  )
}

export default Layout