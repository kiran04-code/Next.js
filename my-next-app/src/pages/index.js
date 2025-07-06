import { Geist, Geist_Mono } from "next/font/google";
import {useSession ,signIn,signOut} from "next-auth/react"
import style from ".././styles/github.module.css"

export default function Home() {

 const session = useSession()
 console.log(session)

 if(session.data === null){
  return(
    <div className={style.div}>
      <button className={style.buttons} onClick={signIn}>
         Signin Using Github
      </button>
    </div>
  )
 }
  return (
    <>
      <h1>
        Auth {
          session?.data?.user.name
        }

      </h1>
       <button className={style.buttons} onClick={signOut}>
        logout
      </button>
    </>
  );
}
