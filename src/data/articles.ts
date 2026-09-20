export type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  readTime: string;
  publishDate: string;
  category: string;
  link: string;
  excerpt: string;
};

export const articles: Article[] = [
  {
    id: 4,
    title: "ChatGPT w SEO - praktyczny poradnik",
    description: "Jak wykorzystać AI w optymalizacji dla wyszukiwarek",
    image: "/gpt_seo.png",
    readTime: "7 min",
    publishDate: "2024",
    category: "SEO/AI",
    link: "https://dogtronic.io/baza-wiedzy/kurs-seo/lekcja-chatgpt-w-seo/",
    excerpt: "Praktyczny kurs wykorzystania ChatGPT w SEO. Dowiedz się, jak AI może pomóc w optymalizacji treści i strategii SEO."
  },
  {
    id: 5,
    title: "Jak założyć stronę internetową?",
    description: "Kompletny przewodnik dla początkujących",
    image: "/wordpress.png",
    readTime: "56 min",
    publishDate: "2025",
    category: "Strony internetowe",
    link: "https://dogtronic.io/baza-wiedzy/blog/jak-zalozyc-strone-internetowa/",
    excerpt: "Poradnik krok po kroku jak założyć własną stronę internetową. Od wyboru domeny po publikację - wszystko co musisz wiedzieć."
  },
  {
    id: 6,
    title: "Jak SEO wpływa na Twoją stronę?",
    description: "Praktyczne wskazówki optymalizacji",
    image: "/seo.png",
    readTime: "11 min",
    publishDate: "2024",
    category: "SEO",
    link: "https://dogtronic.io/baza-wiedzy/kurs-seo/lekcja-jak-seo-wplywa-na-twoja-strone/",
    excerpt: "Dowiedz się, w jakis sposób SEO wpływa na widoczność i sukces Twojej strony internetowej."
  },
  {
    id: 1,
    title: "7 ways I actually wire AI into my marketing work",
    description: "The boring practical stuff, not the hype",
    image: "/medium_ai_marketing.jpg",
    readTime: "3 min",
    publishDate: "2026",
    category: "AI/Marketing",
    link: "https://medium.com/@a.galecki/7-ways-i-actually-wire-ai-into-my-marketing-work-the-boring-practical-stuff-not-the-hype-e295d988449f",
    excerpt: "None of it is magic. It's just removing the parts of the job that don't need a human."
  },
  {
    id: 2,
    title: "I made the same AI compete against itself in SEO tasks",
    description: "Ten sam model, jedna różnica: dostęp do danych na żywo",
    image: "/medium_ai_seo_compete.jpg",
    readTime: "7 min",
    publishDate: "2026",
    category: "SEO/AI",
    link: "https://medium.com/@a.galecki/i-made-the-same-ai-compete-against-itself-in-seo-tasks-9f973a3ee97c",
    excerpt: "The only difference was the live Google data connection."
  },
  {
    id: 3,
    title: "The Google Sheet I use instead of paying for SEO platform subscription",
    description: "Arkusz zamiast abonamentu na narzędzie SEO",
    image: "/medium_google_sheet_seo.jpg",
    readTime: "5 min",
    publishDate: "2026",
    category: "SEO",
    link: "https://medium.com/@a.galecki/the-google-sheet-i-use-instead-of-paying-for-seo-platform-subscription-de3a9aac813c",
    excerpt: "Arkusz Google, który pobiera wyniki wyszukiwania dla Twoich słów kluczowych i zamienia je w dashboard: pozycje, konkurenci, trendy."
  }
];
