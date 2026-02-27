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

  return NextResponse.json({ token })
}