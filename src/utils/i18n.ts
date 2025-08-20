import { portafolioTextContent } from '../content/texts-es';
import { portafolioTextContentEn } from '../content/texts-en';
import type { PortafolioTextContent } from '../content/texts-es';

export type Language = 'es' | 'en';

export function getPortafolioTextContent(language: Language = 'es'): PortafolioTextContent {
  switch (language) {
    case 'en':
      return portafolioTextContentEn;
    case 'es':
    default:
      return portafolioTextContent;
  }
}

export function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language') as Language;
    if (stored && ['es', 'en'].includes(stored)) {
      return stored;
    }
    
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
      return 'en';
    }
  }
  
  return 'es'; // Default to Spanish
}

export function setLanguage(language: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', language);
    
    // Get the current path without language prefix
    const path = window.location.pathname;
    const currentLang = path === '/' ? 'es' : path.startsWith('/en') ? 'en' : 'es';
    
    if (language === currentLang) {
      window.location.reload();
    } else {
      // Redirect to the correct language path
      window.location.href = language === 'en' ? '/en' : '/';
    }
  }
}