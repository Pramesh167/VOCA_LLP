// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: ["/",
//     "/api/webhooks/stripe",
//     "/api/conlangs/:conlangId/dictionary",],
// });


// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
// };


import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/webhooks/stripe",
    "/api/conlangs/:conlangId/dictionary", // Make this route public
  ],
  afterAuth: (authResult, req) => {
    console.log("Auth Result:", authResult);
    console.log("Request Path:", req.nextUrl.pathname);
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
