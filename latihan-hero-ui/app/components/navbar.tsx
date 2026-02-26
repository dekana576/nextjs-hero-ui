"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`

  return (
    <nav className="w-full bg-white shadow-md border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link href="/" className="text-xl font-bold text-blue-600">
          Latihan Hero UI
        </Link>

        <div className="flex gap-4">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/users" className={linkClass("/users")}>
            Users
          </Link>
          <Link href="/posts" className={linkClass("/posts")}>
            Posts
          </Link>
        </div>
      </div>
    </nav>
  )
}