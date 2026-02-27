import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken } from "../lib/jwt"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  const user = await verifyToken(token)

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  const { pathname } = request.nextUrl

  if (pathname.startsWith("/admin") && user.role !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", request.url))
  }

  if (pathname.startsWith("/driver") && user.role !== "driver") {
    return NextResponse.redirect(new URL("/unauthorized", request.url))
  }

  if (pathname.startsWith("/client") && user.role !== "client") {
    return NextResponse.redirect(new URL("/unauthorized", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/driver/:path*", "/client/:path*"],
}