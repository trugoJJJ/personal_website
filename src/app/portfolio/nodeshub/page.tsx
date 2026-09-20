"use client";

import ClientOnlyWrapper from '@/components/ClientOnlyWrapper';
import { Header } from "@/components/home/Header";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { usePalette, COLORS } from "@/components/home/hooks";
import { FooterSection } from "@/components/home/FooterSection";

const PortfolioNodeshub = () => {
  const { isDark, P } = usePalette();

  const project = {
    title: "Sprzedaż narzędzia Nodeshub na rynki zagraniczne",
    tags: ["MicroSaaS", "Ekspansja zagraniczna", "Growth", "API", "Content", "Automatyzacja"]
  };

  // Helpery stylistyczne (spójne z pozostałymi podstronami portfolio)
  const headingStyles: React.CSSProperties = {
    color: isDark ? P("white") : P("black"),
  };
  const bigHeadingClass = "text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]";
  const sectionOuter = (bg: string, withTopBorder = true): React.CSSProperties => ({
    background: bg,
    borderTop: withTopBorder ? `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}` : undefined,
  });
  const cardBase = (accent?: 'ecru' | 'white' | 'charcoal' | 'butter' | 'amaranth' | 'alloy'): React.CSSProperties => ({
    border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
    background: accent === 'white' ? (isDark ? P('charcoal') : P('white')) : (accent ? P(accent) : (isDark ? P('charcoal') : P('white'))),
    color: isDark ? P('white') : P('charcoal'),
  });
  const pillStyle = (bg: keyof typeof COLORS) => ({
    background: bg === 'white' ? (isDark ? P('charcoal') : P('white')) : P(bg),
    color: bg === 'amaranth' || bg === 'alloy' ? P('white') : (isDark ? P('white') : P('black')),
    border: `${isDark ? '1px' : '2px'} solid ${isDark ? P('white') : P('black')}`,
    fontWeight: 800,
    fontSize: 12,
    padding: '4px 10px',
    display: 'inline-block'
  });
  const funnel = [
    {
      stage: 'TOFU',
      title: 'Repozytorium SEO Skills na GitHubie',
      accent: 'amaranth' as const,
      body: 'Z uwagi na specyfikę grupy docelowej (mocno techniczni specjaliści SEO i programiści) postanowiłem podejść do promocji organicznie i naturalnie. Z pomocą działu dev stworzyliśmy repozytorium SEO Skills do Claude Code, które ułatwia użytkownikom korzystanie z narzędzia. Nie wyrobiliśmy się na czas i ominęła nas największa fala popularności skilli do CC, ale i tak udało się stworzyć kanał, który regularnie przyciąga nowych klientów.',
      highlight: 'W miesiącu największej promocji Nodeshub osiągnął dzięki tej kampanii rekordową sprzedaż – około 100 planów w jeden miesiąc.',
      media: {
        kind: 'repo' as const,
        href: 'https://github.com/Senuto/nodeshub-seo-skills',
        repo: 'Senuto/nodeshub-seo-skills',
        stars: '40',
        lang: 'Python',
      },
    },
    {
      stage: 'TOFU',
      title: 'Agent treści',
      accent: 'butter' as const,
      body: 'Po jednorazowym sukcesie kampanii i zweryfikowaniu słuszności wybranej grupy docelowej oraz kanałów promocji doszedłem do wniosku, że najlepszym sposobem na promocję w dostępnym budżecie będzie organiczne budowanie i publikowanie pomniejszych narzędzi i informacji, które zachęcają do korzystania z Nodeshub na platformach typu Reddit, X czy Medium. Aby maksymalnie to zoptymalizować, zbudowałem agenta treści, który pomaga zaplanować najlepsze treści i proponuje, gdzie je publikować.',
      media: {
        kind: 'video' as const,
        embed: 'https://www.loom.com/embed/a1b1d50429ab45778b5d970a797e3003',
        href: 'https://www.loom.com/share/a1b1d50429ab45778b5d970a797e3003',
        title: 'Jak działa agent tworzący treści SEO',
        meta: 'Loom · 5:02',
      },
      article: {
        href: 'https://medium.com/@a.galecki/swar%C3%B3g-highly-powerful-agent-for-network-monitoring-and-content-generation-ae1a0bd0bc73',
        title: 'SWARÓG — highly powerful agent for network monitoring and content generation',
        meta: 'Medium · 8 min read',
      },
    },
    {
      stage: 'MOFU',
      title: 'Rozbudowa strony nodeshub.io',
      accent: 'alloy' as const,
      body: 'Na podstawie danych o zachowaniu klientów na stronie mocno rozbudowałem stronę internetową (za pomocą Claude Code): dodałem nowe podstrony, poukładałem sekcje, stworzyłem onboarding użytkownika oraz rozbudowany cennik. Wspólnie z prawnikiem zaktualizowaliśmy Politykę prywatności i TOS.',
      article: {
        href: 'https://nodeshub.io/',
        title: 'nodeshub.io — SERP and rank tracker API tools for SEO automation',
        meta: 'Efekt wdrożenia · nodeshub.io',
      },
    },
    {
      stage: 'BOFU',
      title: 'Upselling przez automatyzację mailową',
      accent: 'ecru' as const,
      body: 'Jedną ze zmian w aplikacji było dodanie kont użytkownika i rozpoczęcie zbierania maili. Wcześniej narzędzie działało w nietypowym modelu sprzedaży bez kont, który miał być maksymalnie prosty, ale okazał się mało intuicyjny. Po wdrożeniu zmian zbudowałem kampanię automatyczną, która wysyła wiadomości do użytkowników bliskich zużycia całej paczki tokenów.',
    },
  ];

  const results = [
    { t: 'Wzrost sprzedaży x4 kwartał do kwartału', d: 'Z ~5 tys. do ~20 tys. PLN, przy transakcjach mniejszych liczebnie, ale wyższych kwotowo – co oznacza rosnące ARPU i lepszej jakości klienta.' },
    { t: 'Wyraźny wzrost ruchu na API', d: 'Realne, rosnące użycie produktu, nie tylko nowe rejestracje.' },
    { t: 'System monitoringu jakości usługi', d: 'Zbudowany od zera.' },
    { t: 'Nowa strona nodeshub.io', d: 'Nowe podstrony, uporządkowane sekcje, onboarding i rozbudowany cennik.' },
    { t: 'Panel użytkownika', d: 'Doprowadzony do wdrożenia.' },
    { t: 'SEO Skills dla Claude Code', d: 'Publiczny asset budujący górę lejka w społeczności AI/dev.' },
    { t: 'Sieć małych agentów AI', d: 'Kilka razy w tygodniu monitoruje Reddit, Hacker News, X, YouTube, LinkedIn, Substack, Medium i strony konkurencji, podając gotowe propozycje treści. Całość działa w koszcie rzędu ~$30/mies.' },
  ];

  return (
    <div style={{ background: isDark ? P('charcoal') : P('white'), color: isDark ? P('white') : P('charcoal') }}>
      <Header />
      <main className="pt-28">
        <SEO
          title="Sprzedaż narzędzia Nodeshub na rynki zagraniczne – Adam Gałęcki"
          description="Case study rozwoju microSaaS Nodeshub (Senuto): budowa lejka organicznego, agent treści, rozbudowa nodeshub.io i automatyzacja mailowa. Wzrost sprzedaży x4 kwartał do kwartału."
          canonical="https://galecki.website/portfolio/nodeshub"
          ogImage="/nodeshub_projekt.jpg"
        />

        {/* Sekcja tytułowa */}
        <section style={sectionOuter(isDark ? P('charcoal') : P('white'), false)} className="pb-20">
          <div className="container mx-auto max-w-6xl px-6">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm mb-8 pt-4" style={{ opacity: .7 }}>
              <Link href="/" className="hover:opacity-100 transition-opacity">
                Start
              </Link>
              <span>→</span>
              <Link href="/portfolio" className="hover:opacity-100 transition-opacity">
                Portfolio
              </Link>
              <span>→</span>
              <span className="font-medium" style={{ opacity: 1 }}>
                Nodeshub
              </span>
            </nav>

            <header className="mt-4 md:mt-8 mb-12 md:mb-20">
              <h1 className={bigHeadingClass + ' mb-8'} style={headingStyles}>{project.title}</h1>

              <div className="flex flex-wrap gap-3 mb-12 justify-start">
                {project.tags.map(tag => (
                  <span key={tag} style={pillStyle('white')}>{tag}</span>
                ))}
              </div>

              <div
                className="mb-8 px-6 sm:px-12 py-10 text-left"
                style={{
                  border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                  background: P('ecru'),
                  boxShadow: `inset 0 0 0 6px ${isDark ? P('charcoal') : P('white')}`,
                }}
              >
                <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: isDark ? P('white') : P('charcoal'), opacity: .9 }}>
                  Nodeshub to platforma oferująca klucz API z dostępem do danych z Google – lżejsza i tańsza alternatywa dla SerpAPI i DataForSEO, skierowana do developerów i agencji SEO. W niecały rok przeszedł od niestabilnego MVP do produktu z kilkukrotnie wyższą wartością sprzedaży.
                </p>
              </div>
            </header>
          </div>

        </section>

        {/* Cel */}
        <section style={sectionOuter(P('ecru'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="cel">
          <div className="container mx-auto max-w-6xl px-6">
            <header className="mb-8 sm:mb-12 md:mb-20">
              <h2 className={bigHeadingClass} style={headingStyles}>Cel</h2>
            </header>
            <div className="p-6 sm:p-8 md:p-12" style={cardBase('white')}>
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ opacity: .9 }}>
                Senuto to największa platforma do analizy danych SEO w Polsce. Po 10 latach rozwoju na polskim rynku firma stanęła przed problemem z dalszym skalowaniem biznesu – z uwagi na skalę platformy jest ona za droga na testowanie różnych dróg ekspansji zagranicznej.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ opacity: .9 }}>
                Pojawiłem się w firmie pod koniec 2025 roku i moim zadaniem był rozwój jednego z narzędzi microSaaS, które powstały w celu tańszych testów ekspansji zagranicznej.
              </p>
            </div>
          </div>
        </section>

        {/* Mój udział */}
        <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="udzial">
          <div className="container mx-auto max-w-6xl px-6">
            <header className="mb-8 sm:mb-12 md:mb-20">
              <h2 className={bigHeadingClass} style={headingStyles}>Mój udział w projekcie</h2>
            </header>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="md:col-span-2">
                <div className="p-6 sm:p-8 h-full" style={cardBase('white')}>
                  <p className="text-base md:text-lg leading-relaxed" style={{ opacity: .9 }}>
                    Moim zadaniem było znalezienie najtańszych kanałów do pozyskiwania leadów zagranicznych, zebranie feedbacku z rynku i rozwój platformy na jego podstawie. Większość zadań praktycznych i organizacyjnych wykonywałem samodzielnie. Jako wsparcie miałem zespół dev odpowiedzialny za rozwój samego narzędzia.
                  </p>
                </div>
              </div>
              <div className="p-6 sm:p-8" style={cardBase('butter')}>
                <div className="font-extrabold text-lg mb-3">Zakres</div>
                <ul className="text-sm md:text-base space-y-2" style={{ opacity: .9 }}>
                  <li>→ Badanie rynku i wywiady z klientami</li>
                  <li>→ Strategia i lejek sprzedażowy</li>
                  <li>→ Content i kanały organiczne</li>
                  <li>→ Rozwój strony i onboardingu</li>
                  <li>→ Automatyzacja mailowa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Proces */}
        <section style={sectionOuter(P('ecru'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="proces">
          <div className="container mx-auto max-w-6xl px-6">
            <header className="mb-8 sm:mb-12 md:mb-20">
              <h2 className={bigHeadingClass} style={headingStyles}>Proces</h2>
            </header>

            <div className="p-6 sm:p-8 md:p-12 mb-12 md:mb-20" style={cardBase('white')}>
              <p className="text-base md:text-lg leading-relaxed mb-6" style={{ opacity: .9 }}>
                Zacząłem od zbierania feedbacku przez bezpośredni kontakt ze specjalistami na LinkedIn. Przez ponad miesiąc prowadziłem rozmowy z potencjalnymi klientami, a zebrane wnioski spiąłem w dokument zawierający między innymi listę poprawek produktu oraz propozycję promocji narzędzia.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ opacity: .9 }}>
                Oparłem promocję o prosty lejek sprzedażowy zbudowany głównie na organicznych kanałach dotarcia do klienta: Reddit, X.com, LinkedIn, Medium, Hacker News i dev.to.
              </p>
            </div>

            {/* Schemat lejka */}
            <figure className="mb-12 md:mb-20">
              <div
                className="overflow-hidden"
                style={{
                  border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                  boxShadow: `inset 0 0 0 6px ${isDark ? P('charcoal') : P('white')}`,
                  background: P('ecru'),
                }}
              >
                <img
                  src="/nodeshub_lejek.svg"
                  alt="Schemat lejka sprzedażowego Nodeshub: TOFU – repozytorium SEO Skills i agent treści, MOFU – rozbudowa nodeshub.io, BOFU – konta użytkownika i automatyzacja mailowa. Efekt: x4 wzrost sprzedaży kwartał do kwartału."
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <figcaption className="text-xs mt-3 text-center" style={{ opacity: .6 }}>
                Schemat lejka — opracowanie własne
              </figcaption>
            </figure>

            <div className="space-y-8 md:space-y-12">
              {funnel.map((item, i) => (
                <div key={i} className="grid md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 md:items-start">
                  <div className="md:col-span-1">
                    <div className="p-4 sm:p-6 text-center" style={cardBase(item.accent)}>
                      <div className="font-extrabold text-2xl md:text-3xl">{item.stage}</div>
                      <div className="text-xs mt-2" style={{ opacity: .75 }}>Etap lejka</div>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="p-4 sm:p-6 md:p-8" style={cardBase('white')}>
                      <h3 className="font-extrabold text-xl md:text-2xl mb-4">{item.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed mb-4" style={{ opacity: .85 }}>
                        {item.body}
                      </p>
                      {item.highlight && (
                        <div className="p-4 mb-4" style={cardBase('ecru')}>
                          <p className="text-sm md:text-base font-extrabold leading-relaxed">
                            {item.highlight}
                          </p>
                        </div>
                      )}
                      {/* Osadzony film */}
                      {item.media?.kind === 'video' && (
                        <div className="mt-2">
                          <div
                            className="relative w-full overflow-hidden"
                            style={{ aspectRatio: '16/10', ...cardBase('ecru') }}
                          >
                            <iframe
                              src={item.media.embed}
                              title={item.media.title}
                              allowFullScreen
                              loading="lazy"
                              className="absolute inset-0 w-full h-full"
                              style={{ border: 0 }}
                            />
                          </div>
                          <div className="flex items-center justify-between gap-4 mt-3">
                            <span className="text-xs md:text-sm font-extrabold">{item.media.title}</span>
                            <span className="text-xs whitespace-nowrap" style={{ opacity: .6 }}>{item.media.meta}</span>
                          </div>
                        </div>
                      )}

                      {/* Karta repozytorium */}
                      {item.media?.kind === 'repo' && (
                        <a
                          href={item.media.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 mt-2 transition-transform hover:scale-[1.01]"
                          style={cardBase('ecru')}
                        >
                          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="flex-shrink-0">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <div className="min-w-0">
                            <div className="font-extrabold text-sm md:text-base break-all">{item.media.repo}</div>
                            <div className="text-xs mt-1" style={{ opacity: .7 }}>
                              ★ {item.media.stars} · {item.media.lang} · publiczne repozytorium
                            </div>
                          </div>
                        </a>
                      )}

                      {/* Karta artykułu / strony */}
                      {item.article && (
                        <a
                          href={item.article.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 mt-4 transition-transform hover:scale-[1.01]"
                          style={cardBase('ecru')}
                        >
                          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" className="flex-shrink-0">
                            <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
                            <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.5-1.5" />
                          </svg>
                          <div className="min-w-0">
                            <div className="font-extrabold text-sm md:text-base">{item.article.title}</div>
                            <div className="text-xs mt-1" style={{ opacity: .7 }}>{item.article.meta} →</div>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Efekty */}
        <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="efekty">
          <div className="container mx-auto max-w-6xl px-6">
            <header className="mb-8 sm:mb-12 md:mb-20">
              <h2 className={bigHeadingClass} style={headingStyles}>Efekty</h2>
            </header>

            {/* Kluczowe liczby */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16">
              <div className="text-center p-6 sm:p-8" style={cardBase('ecru')}>
                <div className="font-extrabold text-3xl md:text-4xl" style={{ color: P('amaranth') }}>x4</div>
                <div className="text-xs md:text-sm mt-2" style={{ opacity: .75 }}>Wzrost wartości sprzedaży kwartał do kwartału</div>
              </div>
              <div className="text-center p-6 sm:p-8" style={cardBase('ecru')}>
                <div className="font-extrabold text-3xl md:text-4xl" style={{ color: P('amaranth') }}>~20 tys.</div>
                <div className="text-xs md:text-sm mt-2" style={{ opacity: .75 }}>PLN sprzedaży w kwartale (z ~5 tys.)</div>
              </div>
              <div className="text-center p-6 sm:p-8" style={cardBase('ecru')}>
                <div className="font-extrabold text-3xl md:text-4xl" style={{ color: P('amaranth') }}>~$30</div>
                <div className="text-xs md:text-sm mt-2" style={{ opacity: .75 }}>Miesięczny koszt sieci agentów AI</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {results.map((item, i) => (
                <div key={i} className="p-6 sm:p-8" style={cardBase('white')}>
                  <h3 className="font-extrabold mb-3 text-lg md:text-xl flex items-start gap-3">
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0 mt-2"
                      style={{ background: P('amaranth') }}
                    />
                    {item.t}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ opacity: .85 }}>
                    {item.d}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-12 md:mt-16">
              <a
                href="https://nodeshub.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 font-extrabold transition-transform hover:scale-[1.02]"
                style={{
                  background: P('amaranth'),
                  color: P('white'),
                  border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                }}
              >
                Zobacz nodeshub.io →
              </a>
              <a
                href="/#contact"
                className="inline-block px-8 py-4 font-extrabold transition-transform hover:scale-[1.02]"
                style={{
                  background: isDark ? P('charcoal') : P('white'),
                  color: isDark ? P('white') : P('black'),
                  border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                }}
              >
                Porozmawiajmy →
              </a>
            </div>
          </div>
        </section>

      </main>
      <FooterSection />
    </div>
  );
};

export default function NodeshubPortfolioPage() {
  return (
    <ClientOnlyWrapper>
      <PortfolioNodeshub />
    </ClientOnlyWrapper>
  );
}
