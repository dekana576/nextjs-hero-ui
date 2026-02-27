import { NextResponse } from "next/server"
import { createJwt } from "@/lib/jwt"

export async function POST(req: Request) {
  const { username, role } = await req.json()

  const user = {
    id: 1,
    username,
    role,
  }

  const token = await createJwt(user)

  const response = NextResponse.json({ message: "Login success" })

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: false, // true kalau production https
    path: "/",
    maxAge: 60 * 60 * 2,
  })

  return response
}