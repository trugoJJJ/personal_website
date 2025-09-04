'use client';

import { useEffect } from 'react';

export function ThemeSwitcherScript() {
  useEffect(() => {
    // Theme switcher logic
    const getTheme = (): 'dark' | 'light' => {
      if (typeof window === 'undefined') return 'light';
      
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
      if (savedTheme) return savedTheme;
      
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = (theme: 'dark' | 'light') => {
      if (typeof window === 'undefined') return;
      
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    };

    const toggleTheme = () => {
      const currentTheme = getTheme();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    };

    // Language switcher logic
    const getEnglishUrl = () => {
      console.log('=== DEBUG: getEnglishUrl called! ===');
      console.log('Current pathname:', window.location.pathname);
      console.log('Current URL:', window.location.href);
      console.log('User agent:', navigator.userAgent);

      try {
        const pathname = window.location.pathname;
        
        if (!pathname) {
          console.log('No pathname, returning default URL');
          return 'https://galecki.site/';
        }

        let result = '';
        if (pathname === "/") {
          result = 'https://galecki.site/';
        } else if (pathname === "/polityka-prywatnosci") {
          result = 'https://galecki.site/privacy-policy';
        } else if (pathname.startsWith("/portfolio/")) {
          result = `https://galecki.site${pathname}`;
        } else {
          result = 'https://galecki.site/';
        }

        console.log('Generated URL:', result);
        return result;
      } catch (error) {
        console.error('Error in getEnglishUrl:', error);
        // Fallback to main page if there's any error
        return 'https://galecki.site/';
      }
    };

    // Set initial theme
    setTheme(getTheme());

    // Add theme toggle functionality to window for global access
    if (typeof window !== 'undefined') {
      (window as any).toggleTheme = toggleTheme;
      (window as any).getEnglishUrl = getEnglishUrl;
    }

    // Add click event listeners to EN buttons
    const addLanguageSwitcherListeners = () => {
      const enButtons = document.querySelectorAll('button:contains("EN"), [data-lang="en"]');
      
      enButtons.forEach(button => {
        if (button instanceof HTMLButtonElement) {
          button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('EN button clicked!');
            const url = getEnglishUrl();
            console.log('Redirecting to:', url);
            window.location.href = url;
          });
        }
      });
    };

    // Add listeners after a short delay to ensure DOM is ready
    setTimeout(addLanguageSwitcherListeners, 100);
    
    // Also try to add listeners when DOM changes
    const observer = new MutationObserver(() => {
      addLanguageSwitcherListeners();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

  }, []);

  return null; // This component doesn't render anything
}
