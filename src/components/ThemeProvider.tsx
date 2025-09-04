"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ClientOnlyWrapper } from "./ClientOnlyWrapper";

const ThemeProviderContent = ({ children }: { children: React.ReactNode }) => {
  const [forcedTheme, setForcedTheme] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    // Handle URL theme parameters before next-themes initializes
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get('theme');
      
      if (themeParam === 'dark' || themeParam === 'light') {
        // Clear localStorage to override cached theme
        localStorage.removeItem('theme-preference');
        
        // Force the theme
        setForcedTheme(themeParam);
        
        // Update URL without the theme parameter
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.delete('theme');
        window.history.replaceState({}, '', newUrl.toString());
        
        // Remove forced theme after a delay to allow normal theme switching
        setTimeout(() => {
          setForcedTheme(undefined);
        }, 1000);
      }
    }
  }, []);

  return (
    <NextThemeProvider 
      attribute="class" 
      defaultTheme={undefined}
      enableSystem={false}
      storageKey="theme-preference"
      forcedTheme={forcedTheme}
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
