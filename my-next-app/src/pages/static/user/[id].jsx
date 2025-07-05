// pages/userprofile/[id].js
import React from 'react'
// Component name should be PascalCase

const UserProfile = (props) => {
  return (
    <div>
      <h1>User Profile</h1>
    <p><strong>Name:</strong> {props?.datas?.firstName}</p>
      <p><strong>Email:</strong> {props?.datas?.email}</p>
    </div>
  )
}

export default UserProfile
export const  getStaticPaths = async()=>{
   const res = await(await fetch(`https://dummyjson.com/users`)).json()
 const alluser = res.users.map((user)=>user.id)
  return {
    paths: alluser.map((userid)=>({params:{id:`${userid}`}})),
    fallback: true // or 'blocking' to wait until page builds
  }
}
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const datas = await res.json();

  return {
    props: {
      datas,
    },
  };
};
