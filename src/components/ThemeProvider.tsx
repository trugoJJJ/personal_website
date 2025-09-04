"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ClientOnlyWrapper } from "./ClientOnlyWrapper";

const ThemeProviderContent = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    // Sprawdź parametr theme w URL
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get('theme');
      
      if (themeParam === 'light' || themeParam === 'dark') {
        // Ustaw theme na podstawie parametru URL
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(themeParam);
        
        // Zapisz w localStorage
        localStorage.setItem('theme-preference', themeParam);
      }
    }
  }, []);

  return (
    <NextThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      storageKey="theme-preference"
    >
      {children}
    </NextThemeProvider>
  );
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnlyWrapper fallback={<>{children}</>}>
      <ThemeProviderContent>{children}</ThemeProviderContent>
    </ClientOnlyWrapper>
  );
}
