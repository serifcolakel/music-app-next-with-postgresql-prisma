import { NextResponse } from "next/server";

const signedInPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedInPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.ACCESS_APP_TOKEN;
    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.nextUrl));
    }
  }
}
