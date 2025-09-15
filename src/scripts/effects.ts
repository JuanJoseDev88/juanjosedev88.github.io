import { createParticles } from './particles';
import { updateEnergyBar } from './energyBar';
import { smoothScrollToSection } from './smoothScroll';
import { updateActiveNavigation } from './activeNavigation';
import { initializeContactForm } from './contactForm';

export function initializePortfolioEffects() {
    createParticles();
        initializeContactForm();

    window.addEventListener('scroll', () => {
        updateEnergyBar();
        updateActiveNavigation();
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e: Event) => {
            const target = e.currentTarget as HTMLAnchorElement;
            const href = target.getAttribute('href');
            
            // Only prevent default and handle smooth scrolling for anchor-only links
            // This allows normal navigation for full URLs like "/#inicio" or "/en#inicio"
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                
                target.classList.add('active');
                
                const targetId = href.substring(1);
                smoothScrollToSection(targetId);
            }
        });
    });
    
    document.querySelectorAll('.hero .mega-button').forEach(button => {
        button.addEventListener('click', (e: Event) => {
            const target = e.currentTarget as HTMLAnchorElement;
            const href = target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                smoothScrollToSection(targetId);
            }
        });
    });
    
    updateEnergyBar();
}