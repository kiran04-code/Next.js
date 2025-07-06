import React from 'react'
import Link from 'next/link'
import style from "../../styles/User.module.css"
const user = (props) => {
  return (
    <div>
      <h1>Hello From Server!(SSR)</h1>
      {
        props.datas.users && props.datas.users.map((items)=>
          <div className={style.text} >
            <Link href={ `/server/users/${items.id}`}>{items.firstName}</Link>
            </div>
        )
      }
    </div>
  )
}
export const getServerSideProps = async()=>{
  const data = await  fetch("https://dummyjson.com/users")
  const datas = await data.json()  
  return{
    props:{
      datas
    }
}
}
export default user
