"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeUrlHandler() {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Check URL parameters for theme
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get('theme');
      
      if (themeParam === 'dark' || themeParam === 'light') {
        setTheme(themeParam);
        
        // Update URL without the theme parameter to avoid conflicts
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.delete('theme');
        window.history.replaceState({}, '', newUrl.toString());
      }
    }
  }, [setTheme]);

  return null; // This component doesn't render anything
}
