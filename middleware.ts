// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export function middleware(request: NextRequest) {
  const user = request.cookies.get('user')?.value; // Assuming 'user' is stored in cookies
  const { pathname } = request.nextUrl;

  // If the user exists and tries to access the root or auth routes, delete the user and redirect to /home
  if (user && (pathname === '/' || pathname.startsWith('/auth'))) {
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.delete('user'); // Delete the user cookie
    return response;
  }

  // If no user exists and the user tries to access a protected route (not / or /auth/*), redirect to /
  if (!user && pathname !== '/' && !pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Allow the request to proceed if none of the above conditions are met
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};