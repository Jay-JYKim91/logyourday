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
    async session({ session }) {
      console.log(session)
      const user = session?.user
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
        }
      }
      return session
    },
  },
})
// {
//     user: {
//       name: '김주연',
//       email: 'juyeon9391@gmail.com',
//       image: 'https://lh3.googleusercontent.com/a/ACg8ocLVhXOu3KtHlPM8kQr9MedfHyjggDvc72ra03VmK-Gu8EJ7_w=s96-c'
//     },
//     expires: '2024-06-05T00:57:04.567Z'
//   }
export { handler as GET, handler as POST }
