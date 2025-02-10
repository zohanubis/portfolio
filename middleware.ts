import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import i18nextConfig from "./next-i18next.config";

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  const locale = req.cookies.get("NEXT_LOCALE")?.value || i18nextConfig.i18n.defaultLocale;

  // Set ngôn ngữ vào header
  req.headers.set("x-locale", locale);

  // Nếu chưa có ngôn ngữ trong pathname, redirect đến URL có ngôn ngữ
  const isMissingLocale = i18nextConfig.i18n.locales.every((l) => !pathname.startsWith(`/${l}`));

  if (isMissingLocale) {
    const url = new URL(`/${locale}${pathname}`, req.url);
    url.search = searchParams.toString(); // Giữ query params
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
