import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const authOption = {
    providers:[
        GithubProvider({
            clientId:"Ov23liw8UH0zwRtcI1Zp",
            clientSecret:"5228e4342cf168e8a874c49e1e3e191047e4703e"
        })
    ]

    
}

export default NextAuth(authOption)

