import React from 'react'
import { useRouter } from 'next/router'

const profile = (props) => {
    console.log(props.data)
  return (
    <div>
      
    </div>
  )
}
export const getServerSideProps = async()=>{
    const data = await fetch(`https://dummyjson.com/user${id}`).json()
    return{
        props:{
            data
        }
    }
}
export default profile
