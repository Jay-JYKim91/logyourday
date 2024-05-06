import NavBar from "./components/NavBar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-900">
      <NavBar />
      <p>WE COOL?</p>
      <p>어때?</p>
    </main>
  )
}
