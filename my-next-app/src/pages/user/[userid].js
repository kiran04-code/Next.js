import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
const profilData = () => {
    const router = useRouter()
          const id = router.query.userid
     const fetcher = (...args)=>fetch(...args).then(res=>res.json())
     const {data,error} = useSWR(`https://dummyjson.com/users/${id}`,fetcher)
     if(error){
        return <h1>Error is Happned</h1>
     }
     if(!data){
        return <h1> Is Loading is Happned</h1>
     }
  return (
    <div>
        {
            data ? <div> <h1>{data.firstName}</h1><p>
                 {data.email}
                </p></div>:"no user founed"
        }
    </div>
  )
}

export default profilData
