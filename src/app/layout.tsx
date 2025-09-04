import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { LoadingProvider } from "@/components/LoadingProvider";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adam Gałęcki - Specjalista SEO & SEM",
  description: "Profesjonalne usługi SEO, SEM i analityki. Zwiększ widoczność swojej strony w wyszukiwarkach.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  console.log('Theme script starting...');
                  const urlParams = new URLSearchParams(window.location.search);
                  const theme = urlParams.get('theme');
                  console.log('Theme param:', theme);
                  
                  if (theme === 'dark' || theme === 'light') {
                    console.log('Setting theme to:', theme);
                    
                    // Wyczyść wszystkie możliwe klucze motywu
                    const keysToRemove = [
                      'theme-preference',
                      'theme',
                      'next-themes',
                      'color-scheme'
                    ];
                    
                    keysToRemove.forEach(key => {
                      localStorage.removeItem(key);
                      sessionStorage.removeItem(key);
                    });
                    
                    // Ustaw motyw na HTML natychmiast
                    document.documentElement.classList.remove('light', 'dark');
                    document.documentElement.classList.add(theme);
                    console.log('HTML classes after setting theme:', document.documentElement.classList.toString());
                    
                    // Dodaj style inline żeby wymusić motyw
                    const style = document.createElement('style');
                    style.textContent = \`
                      html.dark { color-scheme: dark !important; }
                      html.light { color-scheme: light !important; }
                    \`;
                    document.head.appendChild(style);
                    
                    // Usuń parametr z URL
                    urlParams.delete('theme');
                    const newUrl = window.location.pathname + 
                      (urlParams.toString() ? '?' + urlParams.toString() : '');
                    
                    if (window.history && window.history.replaceState) {
                      window.history.replaceState(null, '', newUrl);
                      console.log('URL cleaned:', newUrl);
                    }
                    
                    // Dodaj listener żeby blokować zmiany motywu
                    const observer = new MutationObserver(function(mutations) {
                      mutations.forEach(function(mutation) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                          const html = document.documentElement;
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
                    
                    console.log('Theme script completed successfully');
                  } else {
                    console.log('No theme param found');
                  }
                } catch (e) {
                  console.error('Theme script error:', e);
                }
              })();
            `,
          }}
        />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Adam Gałęcki" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Adam Gałęcki - Portfolio" />
        <meta property="og:title" content="Portfolio – Adam Gałęcki – Digital Marketing Manager" />
        <meta property="og:description" content="Zajmuję się kompleksową obsługą komunikacji marketingowej nakierowanej na osiąganie zamierzonych celów biznesowych w firmach B2B i B2C." />
        <meta property="og:image" content="/og_cover.png" />
        <meta property="og:url" content="https://galecki.website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio – Adam Gałęcki – Digital Marketing Manager" />
        <meta name="twitter:description" content="Zajmuję się kompleksową obsługą komunikacji marketingowej nakierowanej na osiąganie zamierzonych celów biznesowych w firmach B2B i B2C." />
        <meta name="twitter:image" content="/og_cover.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <LoadingProvider>
          <Providers>
            {children}
            <ScrollToTop />
          </Providers>
        </LoadingProvider>
      </body>
    </html>
  );
}
