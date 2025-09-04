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

    // Set initial theme
    setTheme(getTheme());

    // Add theme toggle functionality to window for global access
    if (typeof window !== 'undefined') {
      (window as any).toggleTheme = toggleTheme;
    }
  }, []);

  return null; // This component doesn't render anything
}
