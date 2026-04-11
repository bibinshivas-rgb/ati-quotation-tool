import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const session =
    req.cookies.get("authjs.session-token") ??
    req.cookies.get("__Secure-authjs.session-token")

  if (session) return NextResponse.next()

  const signIn = req.nextUrl.clone()
  signIn.pathname = "/api/auth/signin"
  return NextResponse.redirect(signIn)
}

export const config = {
  matcher: ["/tool.html"],
}
