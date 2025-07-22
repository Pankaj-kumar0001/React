import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div style={{display:'flex', flexDirection:'column', gap: '10px', alignItems:'center'}}>
        <h1 style={{color:'yellowgreen', fontSize:'32px'}}>Here is Products list</h1>
        <Link to='123'>  Product-123</Link>
        <Link to='456'> Product-456</Link>
        <Link to='789'> Product-789</Link>
        <Outlet />
    </div>
  )
}

export default Products