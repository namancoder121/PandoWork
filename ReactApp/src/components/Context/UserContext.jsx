import React, { createContext, useState } from 'react'
 
export const userContext=createContext( );



export const UserContext = ({ children }) => {
    const[data,setData]=useState('Normal data')
  return (
    
<userContext.Provider value={{data,setData}}>
  {children}
</userContext.Provider>
    
  )
}

