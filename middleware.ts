import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const theme = url.searchParams.get('theme')
  
  if (theme === 'dark' || theme === 'light') {
    // Usuń parametr theme z URL
    url.searchParams.delete('theme')
    
    const response = NextResponse.redirect(url)
    
    // Ustaw cookie z motywem
    response.cookies.set('theme-preference', theme, {
      maxAge: 60 * 60 * 24 * 30 // 30 dni
    })
    
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
