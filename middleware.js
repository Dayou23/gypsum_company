import { authMiddleware } from "@clerk/nextjs";

import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "fr", "ar"],

  defaultLocale: "fr",
});

export default authMiddleware({
  beforeAuth: (req) => {
    // Execute next-intl middleware before Clerk's auth middleware
    return intlMiddleware(req);
  },

  // Ensure that locale specific sign-in pages are public
  publicRoutes: [
    "/",
    "/fr",
    "/en",
    "/ar",
    "/en/product-details/(.*)",
    "/fr/product-details/(.*)",
    "/ar/product-details/(.*)",
    "/product-details/(.*)",
    "/:locale/sign-in",
    "/contact-us",
    "/en/contact-us",
    "/fr/contact-us",
    "/ar/contact-us",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
