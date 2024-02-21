import React from 'react'
import { useContext } from 'react'
import { userContext } from './Context/UserContext'

const Card1 = () => {
    const {data}=useContext(userContext)

  return (
    <div>
        <h4>{data}</h4>
        </div>
  )
}

export default Card1