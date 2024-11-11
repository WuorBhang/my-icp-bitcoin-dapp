import { NextResponse } from 'server/routes/auth';
import type { NextRequest } from 'server/routes/auth';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('auth_token'); // Replace with your auth check
  const isAuthPage = request.nextUrl.pathname === '/login';

  if (!isAuthenticated && !isAuthPage && request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};