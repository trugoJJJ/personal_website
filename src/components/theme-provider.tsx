'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeProvider({ children, ...props }: any) {
  const [mounted, setMounted] = useState(false)
  const [forcedTheme, setForcedTheme] = useState<string | undefined>(undefined)

  useEffect(() => {
    setMounted(true)
    
    // Sprawdź czy HTML już ma ustawiony motyw (z head script)
    const htmlElement = document.documentElement
    if (htmlElement.classList.contains('dark')) {
      console.log('Theme provider: dark theme detected from HTML')
      setForcedTheme('dark')
    } else if (htmlElement.classList.contains('light')) {
      console.log('Theme provider: light theme detected from HTML')
      setForcedTheme('light')
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
      forcedTheme={forcedTheme}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
