"use client"

import React from "react"
import { useSession, signOut, signIn } from "next-auth/react"

export default function NavBar() {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <div>
      {user ? user.username : ""}
      {session ? (
        <button onClick={() => signOut()}>sign out</button>
      ) : (
        <button onClick={() => signIn()}>sign in</button>
      )}
    </div>
  )
}
