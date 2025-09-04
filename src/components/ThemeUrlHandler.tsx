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
        // Clear localStorage to override cached theme
        localStorage.removeItem('theme-preference');
        
        // Set theme from URL parameter
        setTheme(themeParam);
        
        // Update URL without the theme parameter to avoid conflicts
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.delete('theme');
        window.history.replaceState({}, '', newUrl.toString());
      } else {
        // If no URL parameter, check if theme is already set in localStorage
        const storedTheme = localStorage.getItem('theme-preference');
        if (!storedTheme) {
          // Set default light theme if no theme is stored
          setTheme('light');
        }
      }
    }
  }, [setTheme]);

  return null; // This component doesn't render anything
}
