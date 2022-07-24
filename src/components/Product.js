import React from 'react'
import Featured from './Featured'
import New from './New'
import { Link, Outlet } from 'react-router-dom'

function Product() {
  return (
      <>
    <div>
      <input type="text" placeholder='Search Product' />
    </div>
    <div>
        <Link  to='Featured' element={<Featured/>}> Featured</Link>
        <Link  to='New' element={<New/>}> New</Link>
        <Outlet/>
    </div>
    </>
  )
}

export default Product
