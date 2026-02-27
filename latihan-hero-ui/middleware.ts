import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken } from "@/lib/jwt"

export async function middleware(req: NextRequest) {
  console.log("Middleware running for:", req.nextUrl.pathname)
  const token = req.cookies.get("token")?.value
  console.log("Token from cookie:", token)

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  const user = await verifyToken(token)

  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  const { pathname } = req.nextUrl

  if (pathname.startsWith("/admin") && user.role !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", req.url))
  }

  if (pathname.startsWith("/client") && user.role !== "client") {
    return NextResponse.redirect(new URL("/unauthorized", req.url))
  }

  if (pathname.startsWith("/driver") && user.role !== "driver") {
    return NextResponse.redirect(new URL("/unauthorized", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/client/:path*", "/driver/:path*"],
}