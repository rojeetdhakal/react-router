import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
   const params =useParams()
   const UserId=params.UserId

  return (
    <div>
       <h1>UserDetails {UserId}</h1>
    </div>
  )
}

export default UserDetails
