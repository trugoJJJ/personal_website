'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeProvider({ children, ...props }: any) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    // Sprawdź URL parametr po mount
    const urlParams = new URLSearchParams(window.location.search)
    const themeParam = urlParams.get('theme')
    
    if (themeParam === 'dark' || themeParam === 'light') {
      // Wyczyść localStorage
      localStorage.removeItem('theme-preference')
      
      // Ustaw motyw bezpośrednio na HTML
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(themeParam)
      
      // Wyczyść URL
      urlParams.delete('theme')
      const newUrl = `${window.location.pathname}${urlParams.toString() ? '?' + urlParams.toString() : ''}`
      window.history.replaceState(null, '', newUrl)
    }
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="theme-preference"
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
