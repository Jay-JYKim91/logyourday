"use client"
import { useToast } from "@/components/ui/use-toast"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import NavBar from "../components/NavBar"

export default function Home() {
  const { data: session } = useSession()
  const user = session?.user
  const { toast } = useToast()

  useEffect(() => {
    if (user) {
      toast({
        title: "Welcome",
        description: `${user.nickname}`,
      })
    }
  }, [session])

  return (
    <div className="min-h-screen" style={{ backgroundColor: "honeydew" }}>
      <NavBar session={session} />
      <p>WE COOL?</p>
      <p>어때?</p>
    </div>
  )
}
