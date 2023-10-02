import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { trpc } from "./app/_trpc/client";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/", "/pricing", "/auth-callback"],
  // afterAuth(auth, req, evt) {
  //   if (!auth.userId) {
  //     redirectToSignIn({ returnBackUrl: req.url });
  //   }

  //   if (auth.userId) {
  //     const dashboard = new URL("/dashboard", req.url);
  //     return NextResponse.redirect(dashboard);
  //   }
  // },
});

export const config = {
  //   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/dashboard", "/(api|trpc)(.*)"],
};
