"use client";

import React from "react";
import { usePalette } from "./hooks";
import portrait from "@/assets/hero-portrait.jpg";

export const AboutSection = () => {
  const { isDark, P } = usePalette();

  const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <header className="mb-12 md:mb-24 mt-4 md:mt-8">
      <h2
        className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]"
        style={{ color: isDark ? P("white") : P("black") }}
      >
        {children}
      </h2>
    </header>
  );

  return (
    <section className="py-24 md:py-36" id="about"
             style={{ background: isDark ? P("charcoal") : P("white"), borderTop: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
      <div className="container mx-auto max-w-6xl">
        <SectionHeading>O mnie</SectionHeading>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6" style={{ color: isDark ? P("white") : P("charcoal") }}>
              <h3 className="text-2xl md:text-3xl font-extrabold text-left">Cześć, nazywam się Adam</h3>
              <p className="text-base md:text-lg">
                Zajmuję się kompleksową obsługą komunikacji marketingowej nakierowanej na osiąganie zamierzonych celów biznesowych.
              </p>
              <p className="text-base md:text-lg">
                Przez ostatnie 5&nbsp;lat rozwijałem się w&nbsp;marketingu –&nbsp;od grafika,&nbsp;przez specjalistę SEO,&nbsp;po managera zespołu.
                Realizowałem długoterminowe strategie marketingowe dla różnych branż (IT,&nbsp;produkcyjna,&nbsp;medyczna,&nbsp;krypto). Zarządzałem zespołem i&nbsp;wspierałem projekty IT oraz marketingowe dla największych marek w&nbsp;Polsce.
              </p>
            </div>

            {/* Kontakt (ikony + QR) */}
            <div className="p-10"
                 style={{ background: P("butter"), color: isDark ? P("white") : P("black"), border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
              {(() => {
                // Minimalistyczny QR kod bez dodatkowego tła
                const QR_DATA_URI = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://linktr.ee/trugojjj')}&format=png&color=${isDark ? 'ffffff' : '000000'}&bgcolor=${isDark ? '000000' : 'ffffff'}&ecc=L&margin=0`;

                return (
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                    {/* Ikony - full width na mobile, 3 kolumny na desktop */}
                    <div className="col-span-1 md:col-span-3 grid grid-cols-3 gap-4 md:gap-6">
                      {[
                        {
                          Icon: (props: any) => (
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          ),
                          href: "https://www.linkedin.com/in/admagalecki/",
                          label: "LinkedIn",
                        },
                        {
                          Icon: (props: any) => (
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
                              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                            </svg>
                          ),
                          href: "https://www.tiktok.com/@firma_galecka?is_from_webapp=1&sender_device=pc",
                          label: "TikTok",
                        },
                        {
                          Icon: (props: any) => (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
                              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                            </svg>
                          ),
                          href: "https://www.behance.net/adamgacki1",
                          label: "Behance",
                        },
                      ].map(({ Icon, href, label }, i) => {
                        const baseBg = isDark ? P("charcoal") : P("white");
                        const baseColor = isDark ? P("white") : P("black");
                        return (
                          <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            className="group w-full aspect-square flex items-center justify-center transition-transform duration-300 ease-out focus-visible:outline-none"
                            style={{
                              border: `3px solid ${isDark ? P("white") : P("black")}`,
                              background: baseBg,
                              color: baseColor,
                              position: 'relative',
                            }}
                            onMouseEnter={(e) => {
                              const el = e.currentTarget;
                              el.style.background = P("amaranth");
                              el.style.color = P("white");
                              el.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                              const el = e.currentTarget;
                              el.style.background = baseBg;
                              el.style.color = baseColor;
                              el.style.transform = 'translateY(0)';
                            }}
                          >
                            <Icon className="h-8 w-8 md:h-6 md:w-6" />
                          </a>
                        );
                      })}
                    </div>

                    {/* QR po prawej - ukryty na mobile */}
                    <div className="hidden md:flex col-span-2 justify-end items-center text-center">
                      <a
                        href="https://linktr.ee/trugojjj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mx-auto transition-transform duration-300 ease-out hover:scale-105"
                        style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, background: isDark ? P("black") : P("white") }}
                        aria-label="Linktree - wszystkie linki"
                      >
                        <img src={QR_DATA_URI} alt="QR Code - linktr.ee/trugojjj" className="w-[85%] h-[85%] object-contain" />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          <div className="space-y-8">
            <figure className="overflow-hidden" style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
              <img src={portrait.src} alt="Portret – o mnie" loading="lazy" className="w-full aspect-square object-cover" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};