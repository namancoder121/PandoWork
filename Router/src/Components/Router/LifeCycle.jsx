import React, { useEffect, useState } from 'react'

const LifeCycle = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        let url='https://jsonplaceholder.typicode.com/users'
        fetch(url).then((res)=>res.json()).then((data)=>setData(data))

    },[LifeCycle])
  return (
    <div>
        
            {data && data.map((e)=>{
                return(
                    <ul key={e.id}>
                    <li>{e.name}</li>
                    <li>{e.username}</li>
                    <li>{e.phone}</li>

                    </ul>
                )

            })}
    
    </div>
  )
}

export default LifeCycle