import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({ message: "Logout success" })

  response.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0), // 🔥 hapus cookie
    path: "/",
  })

  return response
}