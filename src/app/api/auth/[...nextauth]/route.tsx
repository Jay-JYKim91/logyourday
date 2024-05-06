import { addUser, getUser, UserType } from "@/services/users"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) {
        return false
      }

      const existing_user = await checkUser(user.email)
      if (existing_user.length === 0) {
        const res = await addingUser({
          name: user.name || "",
          nickname: user?.email.split("@")[0] || "",
          email: user.email,
          image: user.image || "",
        })
        if (res.error) {
          return false
        }
      }
      return true
    },
    async session({ session }) {
      const user = session?.user
      if (user) {
        session.user = {
          ...user,
          nickname: user.email?.split("@")[0] || "",
        }
      }
      return session
    },
  },
})

const checkUser = async (email: string) => {
  const { data } = await getUser(email)
  return data ? data : []
}

const addingUser = async (user: UserType) => {
  const { data, error } = await addUser(user)
  return { data, error }
}
export { handler as GET, handler as POST }
