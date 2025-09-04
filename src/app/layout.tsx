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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5K2V7KWFD0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5K2V7KWFD0');
            `,
          }}
        />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P78X75T3');
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
        <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/e1fcebeaaeac176f12c58282/script.js"></script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-P78X75T3"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
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
