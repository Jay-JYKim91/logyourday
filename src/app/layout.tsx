import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"
import { Gothic_A1, Lato } from "next/font/google"
import AuthContext from "./context/AuthContext"
import "./globals.css"

const gothic = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthContext>
      <html lang="en">
        <body className={gothic.className}>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </AuthContext>
  )
}
