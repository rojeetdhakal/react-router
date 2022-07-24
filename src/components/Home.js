import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate =useNavigate()

  return (
    <div>
      This is Home pages.
      <div>
      <button onClick={()=>navigate('OrderSummary')} >Place Order</button>
      </div>
    </div>
  )
}

export default Home
