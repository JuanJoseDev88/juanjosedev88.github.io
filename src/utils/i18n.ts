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

    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
      return 'en';
    }
  }
  
  return 'es'; 
}

export function setLanguage(language: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', language);
    
    const path = window.location.pathname;
    
    let targetUrl = '/';
    
    if (path === '/' || path === '/en') {
      targetUrl = language === 'en' ? '/en' : '/';
    } else if (path === '/projects' || path === '/projects-en') {
      targetUrl = language === 'en' ? '/projects-en' : '/projects';
    } else {
      targetUrl = language === 'en' ? '/en' : '/';
    }
    
    window.location.href = targetUrl;
  }
}