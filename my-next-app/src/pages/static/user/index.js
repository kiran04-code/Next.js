// pages/static/index.js or pages/static/userlist.js
import React from 'react'
import Link from 'next/link'

const User = (props) => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Hello From Static! (SSG)</h1>
      {props.datas?.users?.map((item) => (
        <div key={item.id} className='bg-red-500 p-2 my-2 rounded'>
          <li className='list-none'>
            <Link href={`/static/user/${item.id}`} className='text-white hover:underline'>
              {item.firstName}
            </Link>
          </li>
        </div>
      ))}
    </div>
  )
}

export default User

// SSG: Runs at build time
export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/users")
  const datas = await res.json()
  return {
    props: {
      datas,
    },
  }
}
