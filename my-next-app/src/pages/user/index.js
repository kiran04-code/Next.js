import React from 'react'
import { useRouter } from 'next/router'
import useSWR from "swr"
import Link from 'next/link'
const AllUser = () => {
     const userfetcher = (...args)=>fetch(...args).then(res=>res.json())
     const {data,error} = useSWR("https://dummyjson.com/user",userfetcher)
     if(error){
        return (
            <h1>
                {error}
            </h1>
        )
     }

     if(!data){
        return <h1> is Loading</h1>
     }
  return (
    <div>
      <h1>User</h1>

    <ul>
  {
    data?.users?.map((item) => (
    <div>
          <Link href={`/user/${item.id}`} key={item.id} >{item.firstName}</Link>
    </div>
    ))
  }
</ul>
    </div>
  )
}

export default AllUser
