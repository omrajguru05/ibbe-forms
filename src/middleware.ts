import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
    const session = request.cookies.get('session')
    const { pathname } = request.nextUrl

    // Protected routes
    if (pathname.startsWith('/dashboard') || pathname.startsWith('/responses')) {
        if (!session) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    // Redirect to dashboard if already logged in and trying to access login
    if (pathname === '/login' && session) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - form (public form routes)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|form).*)',
    ],
}
