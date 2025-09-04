console.log('=== THEME SWITCHER LOADED ===');

function switchTheme() {
  try {
    console.log('=== THEME DEBUG START ===');
    console.log('Current URL:', window.location.href);
    console.log('Current HTML classes:', document.documentElement.classList.toString());
    console.log('localStorage before:', JSON.stringify(localStorage));
    
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');
    console.log('Theme param found:', theme);
    
    if (theme === 'dark' || theme === 'light') {
      console.log('=== APPLYING THEME ===');
      
      // 1. Wyczyść wszystkie storage
      const keysToRemove = [
        'theme-preference',
        'theme',
        'next-themes',
        'color-scheme',
        'next-themes-*'
      ];
      
      // Usuń wszystkie klucze next-themes
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('next-themes') || keysToRemove.includes(key)) {
          console.log('Removing key:', key);
          localStorage.removeItem(key);
        }
      });
      
      console.log('localStorage after clearing:', JSON.stringify(localStorage));
      
      // 2. Ustaw motyw na HTML
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      console.log('HTML classes after setting:', document.documentElement.classList.toString());
      
      // 3. Dodaj style inline
      const existingStyle = document.getElementById('forced-theme-style');
      if (existingStyle) existingStyle.remove();
      
      const style = document.createElement('style');
      style.id = 'forced-theme-style';
      style.textContent = `
        html.dark { 
          color-scheme: dark !important; 
          background-color: #000 !important;
        }
        html.light { 
          color-scheme: light !important; 
          background-color: #fff !important;
        }
      `;
      document.head.appendChild(style);
      console.log('Style added to head');
      
      // 4. Wyczyść URL
      urlParams.delete('theme');
      const newUrl = window.location.pathname + 
        (urlParams.toString() ? '?' + urlParams.toString() : '');
      
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', newUrl);
        console.log('URL cleaned to:', newUrl);
      }
      
      // 5. Dodaj MutationObserver
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const html = document.documentElement;
            const currentClasses = html.classList.toString();
            console.log('Class change detected:', currentClasses);
            
            if (!html.classList.contains(theme)) {
              console.log('Theme change blocked, resetting to:', theme);
              html.classList.remove('light', 'dark');
              html.classList.add(theme);
            }
          }
        });
      });
      
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
      
      console.log('=== THEME APPLIED SUCCESSFULLY ===');
      
      // 6. Sprawdź po 1 sekundzie
      setTimeout(() => {
        console.log('=== 1 SECOND CHECK ===');
        console.log('HTML classes now:', document.documentElement.classList.toString());
        console.log('localStorage now:', JSON.stringify(localStorage));
        console.log('Current URL:', window.location.href);
      }, 1000);
      
    } else {
      console.log('No theme param found');
    }
    
  } catch (e) {
    console.error('Theme script error:', e);
    console.error('Error stack:', e.stack);
  }
  
  console.log('=== THEME DEBUG END ===');
}

// Uruchom natychmiast
switchTheme();
