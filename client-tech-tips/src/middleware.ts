import { NextRequest, NextResponse } from "next/server";

import { getCurrentUser } from "./services/AuthServices";

const AuthRoutes = ["/login", "/register"]

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

//   console.log("pathname", pathname); // /dashboard
// console.log("url", req.url) // http://localhost:3000/dashboard


  const user = await getCurrentUser();

  if (!user?.email) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else{
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  return NextResponse.redirect(new URL(`/login`, req.url));

}


export const config = {
  matcher: ["/profile", "/dashboard"],
};
