"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Shield, Settings } from "lucide-react";
import { usePalette } from "./home/hooks";

export const CookieBanner = () => {
  const { isDark, P } = usePalette();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Sprawdź czy użytkownik już zaakceptował cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookiesAccepted", "true");
    localStorage.setItem("analyticsCookies", "true");
    localStorage.setItem("marketingCookies", "true");
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookiesAccepted", "true");
    localStorage.setItem("analyticsCookies", "false");
    localStorage.setItem("marketingCookies", "false");
    setIsVisible(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div
        className="max-w-4xl mx-auto rounded-lg shadow-2xl border-3 transition-all duration-300 ease-out"
        style={{
          border: `3px solid ${isDark ? P("white") : P("black")}`,
          background: isDark ? P("charcoal") : P("white"),
          color: isDark ? P("white") : P("charcoal"),
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b-3"
             style={{ borderBottom: `3px solid ${isDark ? P("white") : P("black")}` }}>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full"
                 style={{ background: P("butter"), color: isDark ? P("white") : P("black") }}>
              <Cookie className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-extrabold">Używamy plików cookie</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Aby zapewnić najlepsze doświadczenia na naszej stronie
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Zamknij baner cookies"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-sm leading-relaxed">
            Ta strona używa plików cookie, aby poprawić Twoje doświadczenia podczas przeglądania. 
            Pliki cookie kategoryzowane jako niezbędne są przechowywane w przeglądarce, 
            ponieważ są niezbędne do działania podstawowych funkcji strony internetowej.
          </p>

          {/* Cookie Types */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg"
                 style={{ background: isDark ? P("ecru") : P("ecru"), border: `1px solid ${isDark ? P("white") : P("alloy")}` }}>
              <Shield className="h-4 w-4 text-green-600" />
              <div className="flex-1">
                <div className="font-semibold text-sm">Niezbędne pliki cookie</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Zawsze włączone. Są niezbędne do prawidłowego działania strony.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg"
                 style={{ background: isDark ? P("ecru") : P("ecru"), border: `1px solid ${isDark ? P("white") : P("alloy")}` }}>
              <Settings className="h-4 w-4 text-blue-600" />
              <div className="flex-1">
                <div className="font-semibold text-sm">Analityczne pliki cookie</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Pomagają nam zrozumieć, jak odwiedzający wchodzą w interakcję ze stroną.
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Details */}
          <button
            onClick={toggleExpanded}
            className="text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
            style={{ color: P("amaranth") }}
          >
            {isExpanded ? "Ukryj szczegóły" : "Pokaż szczegóły"}
            <Settings className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          {isExpanded && (
            <div className="mt-4 p-4 rounded-lg text-sm"
                 style={{ background: isDark ? P("ecru") : P("ecru"), border: `1px solid ${isDark ? P("white") : P("alloy")}` }}>
              <h4 className="font-semibold mb-2">Szczegółowe informacje o plikach cookie:</h4>
              <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                <li><strong>Niezbędne:</strong> Sesyjne pliki cookie, preferencje językowe</li>
                <li><strong>Analityczne:</strong> Google Analytics, statystyki odwiedzin</li>
                <li><strong>Funkcjonalne:</strong> Zapamiętywanie ustawień, preferencji</li>
              </ul>
              <p className="mt-3 text-xs">
                Możesz w każdej chwili zmienić swoje preferencje w ustawieniach przeglądarki 
                lub skontaktować się z nami w sprawie pytań dotyczących plików cookie.
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 p-6 border-t-3"
             style={{ borderTop: `3px solid ${isDark ? P("white") : P("black")}` }}>
          <button
            onClick={acceptEssential}
            className="flex-1 px-6 py-3 font-extrabold transition-all duration-300 ease-out border-3 hover:scale-105"
            style={{
              border: `3px solid ${isDark ? P("white") : P("black")}`,
              background: isDark ? P("charcoal") : P("white"),
              color: isDark ? P("white") : P("black"),
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = P("alloy");
              (e.currentTarget as HTMLButtonElement).style.color = P("white");
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = isDark ? P("charcoal") : P("white");
              (e.currentTarget as HTMLButtonElement).style.color = isDark ? P("white") : P("black");
            }}
          >
            Tylko niezbędne
          </button>
          
          <button
            onClick={acceptAll}
            className="flex-1 px-6 py-3 font-extrabold transition-all duration-300 ease-out border-3 hover:scale-105"
            style={{
              border: `3px solid ${isDark ? P("white") : P("black")}`,
              background: P("amaranth"),
              color: P("white"),
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = P("butter");
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = P("amaranth");
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
            }}
          >
            Akceptuj wszystkie
          </button>
        </div>
      </div>
    </div>
  );
};
