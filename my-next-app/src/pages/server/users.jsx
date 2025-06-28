import React from 'react'
import Link from 'next/link'
const user = (props) => {
  return (
    <div>
      <h1>Hello From Server!(SSR)</h1>
      {
        props.datas.users && props.datas.users.map((items)=>
          <div className='bg-red-500'>
            <Link href={ `/server/users/${items.id}`}>{items.firstName}</Link>
            </div>
        )
      }
    </div>
  )
}
export const getServerSideProps = async()=>{
  console.log("task is Going  on  server ")
  const data = await  fetch("https://dummyjson.com/user")
  const datas = await data.json()
  return{
    props:{
      datas
    }
}
}
export default user
